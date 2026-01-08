"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import RoundedImage from "./RoundedImage";
import DonutChart from "./DonutChart";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Slide content types
export interface BaseSlide {
  id: string;
  type: "chart" | "image" | "quote" | "quote-with-logo";
}

export interface ChartSlide extends BaseSlide {
  type: "chart";
  title: string;
  description: React.ReactNode;
  chartConfig?: {
    largePercentage: string;
    largeLabel: string;
    smallPercentage: string;
    smallLabel: string;
  };
}

export interface ImageSlide extends BaseSlide {
  type: "image";
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: React.ReactNode;
}

export interface QuoteSlide extends BaseSlide {
  type: "quote";
  imageSrc: string;
  imageAlt: string;
  quote: string;
}

export interface QuoteWithLogoSlide extends BaseSlide {
  type: "quote-with-logo";
  imageSrc: string;
  imageAlt: string;
  quote: string;
  logoSrc: string;
  logoAlt: string;
  logoWidth?: number;
  logoHeight?: number;
}

export type CarouselSlide = ChartSlide | ImageSlide | QuoteSlide | QuoteWithLogoSlide;

interface UniversalCarouselProps {
  slides: CarouselSlide[];
  imageTopRadius?: string;
  imageBottomRadius?: string;
}

export default function UniversalCarousel({
  slides,
  imageTopRadius = "rounded-t-[32px]",
  imageBottomRadius = "rounded-b-[32px]",
}: UniversalCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Refs for DonutChart animation
  const donutChartRef = useRef<HTMLDivElement>(null);
  const largeCircleRef = useRef<HTMLDivElement>(null);
  const smallCircleRef = useRef<HTMLDivElement>(null);
  const largeTextRef = useRef<HTMLDivElement>(null);
  const smallTextRef = useRef<HTMLDivElement>(null);

  const minSwipeDistance = 50;

  // DonutChart scroll animation
  useEffect(() => {
    if (
      !donutChartRef.current ||
      !largeCircleRef.current ||
      !smallCircleRef.current ||
      !largeTextRef.current ||
      !smallTextRef.current
    )
      return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        largeCircleRef.current,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.4,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: donutChartRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        largeTextRef.current,
        { opacity: 0, scale: 0.5, x: -30 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1,
          ease: "back.out(2)",
          delay: 0.4,
          scrollTrigger: {
            trigger: donutChartRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        smallCircleRef.current,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.4,
          ease: "back.out(1.7)",
          delay: 0.5,
          scrollTrigger: {
            trigger: donutChartRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        smallTextRef.current,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(2)",
          delay: 1.0,
          scrollTrigger: {
            trigger: donutChartRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const renderVisual = (slide: CarouselSlide, index: number) => {
    if (slide.type === "chart") {
      return (
        <div className="relative w-full max-w-[500px] lg:max-w-[600px] aspect-square">
          <DonutChart
            largePercentage={slide.chartConfig?.largePercentage || "85%"}
            largeLabel={slide.chartConfig?.largeLabel || "Total Sales"}
            smallPercentage={slide.chartConfig?.smallPercentage || "35%"}
            smallLabel={slide.chartConfig?.smallLabel || "customers"}
            chartRef={donutChartRef}
            largeCircleRef={largeCircleRef}
            smallCircleRef={smallCircleRef}
            largeTextRef={largeTextRef}
            smallTextRef={smallTextRef}
          />
        </div>
      );
    }

    // All other types have images
    const imageSrc = slide.type === "image" || slide.type === "quote" || slide.type === "quote-with-logo" ? slide.imageSrc : "";
    const imageAlt = slide.type === "image" || slide.type === "quote" || slide.type === "quote-with-logo" ? slide.imageAlt : "";

    return (
      <div className="relative w-full max-w-[500px] lg:max-w-[600px] aspect-square">
        <RoundedImage
          src={imageSrc}
          alt={imageAlt}
          priority={index === 0}
          topRadius={imageTopRadius}
          bottomRadius={imageBottomRadius}
        />
      </div>
    );
  };

  const renderContent = (slide: CarouselSlide) => {
    if (slide.type === "chart" || slide.type === "image") {
      return (
        <>
          <h1
            className="h1-responsive text-[#332E2E] mb-4"
            dangerouslySetInnerHTML={{ __html: slide.title }}
          />
          <div className="p-responsive text-[#333333] leading-snug">
            {slide.description}
          </div>
        </>
      );
    }

    if (slide.type === "quote") {
      return (
        <div className="p-responsive text-[#333333]">
          <p className="-indent-[0.4em] font-playfair font-semibold text-[#2D2D2D] text-2xl md:text-3xl leading-tight">
            {slide.quote}
          </p>
        </div>
      );
    }

    if (slide.type === "quote-with-logo") {
      return (
        <div className="p-responsive text-[#333333]">
          <div className="flex flex-col gap-4">
            <p className="-indent-[0.4em] font-playfair font-semibold text-[#2D2D2D] text-2xl md:text-3xl leading-tight">
              {slide.quote}
            </p>
            <div
              className="relative ml-4"
              style={{
                width: slide.logoWidth ? `${slide.logoWidth}px` : "140px",
                height: slide.logoHeight ? `${slide.logoHeight}px` : "50px",
              }}
            >
              <Image
                src={slide.logoSrc}
                alt={slide.logoAlt}
                fill
                className="object-contain object-left"
              />
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div
      className="relative w-full"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Slider Track - FULL WIDTH */}
      <div className="w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out will-change-transform"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="w-full flex-shrink-0 min-w-full">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 w-full max-w-[1600px] mx-auto px-8 md:px-28 py-8">
                {/* Visual Content Column - FILL SPACE */}
                <div className="order-1 lg:order-1 w-full lg:flex-1 flex items-center justify-center lg:justify-end lg:pr-6">
                  {renderVisual(slide, index)}
                </div>

                {/* Text Content Column - FILL SPACE */}
                <div className="order-2 lg:order-2 w-full lg:flex-1 mt-4 lg:mt-0 z-10 relative flex flex-col lg:pl-6 self-center">
                  {renderContent(slide)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Below content on mobile, centered on desktop */}
      <button
        onClick={prevSlide}
        className="absolute left-4 -bottom-10 lg:top-1/2 lg:-translate-y-1/2 lg:bottom-auto w-[46px] h-[46px] rounded-full border-2 border-[#FF4930] bg-[#FF4930] flex items-center justify-center transition-all hover:bg-white hover:border-[#FF4930] focus:outline-none group z-20 shadow-lg"
        aria-label="Previous slide"
      >
        <Image
          src="/carousel-arrow-left.svg"
          alt="Previous"
          width={24}
          height={24}
          className="brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all"
        />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 -bottom-10 lg:top-1/2 lg:-translate-y-1/2 lg:bottom-auto w-[46px] h-[46px] rounded-full border-2 border-[#FF4930] bg-[#FF4930] flex items-center justify-center transition-all hover:bg-white hover:border-[#FF4930] focus:outline-none group z-20 shadow-lg"
        aria-label="Next slide"
      >
        <Image
          src="/carousel-arrow-right.svg"
          alt="Next"
          width={24}
          height={24}
          className="brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all"
        />
      </button>
    </div>
  );
}

