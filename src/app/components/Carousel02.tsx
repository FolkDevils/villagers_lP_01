"use client";

import { useState } from "react";
import Image from "next/image";

interface SlideData {
  id: string;
  quote: string;
  logoSrc: string;
  logoAlt: string;
  imageSrc: string;
  imageAlt: string;
  logoWidth?: number; // Optional custom width
  logoHeight?: number; // Optional custom height
}

const SLIDES: SlideData[] = [
  {
    id: "impact-1",
    quote: "“Villagers helped us connect with the customers who make our shop thrive.”",
    logoSrc: "/logo_yonderlust.svg",
    logoAlt: "Yonderlust",
    imageSrc: "/quote_01b.png",
    imageAlt: "Share the Impact",
    logoWidth: 180, // Default width
    logoHeight: 50,  // Default height
  },
  {
    id: "impact-2",
    quote: "“Villagers changed my business in ways I could not have thought possible.”",
    logoSrc: "/logo_indio.svg",
    logoAlt: "Indio",
    imageSrc: "/quote_02.png",
    imageAlt: "Share the Impact",
    logoWidth: 110,
    logoHeight: 50,
  },
  {
    id: "impact-3",
    quote: "“I was able to connect with my customers like never before ”",
    logoSrc: "/logo_ascend.svg",
    logoAlt: "Ascend",
    imageSrc: "/quote_03.png",
    imageAlt: "Share the Impact",
    logoWidth: 150,
    logoHeight: 50,
  },
  {
    id: "impact-4",
    quote: "“Villagers made connecting with my customers online so easy.”",
    logoSrc: "/logo_bullseye.svg",
    logoAlt: "Yonderlust",
    imageSrc: "/quote_05.png",
    imageAlt: "Share the Impact",
    logoWidth: 100,
    logoHeight: 110,
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

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
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  return (
    <div 
      className="w-full relative"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Slider Track */}
      <div className="w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out will-change-transform"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {SLIDES.map((slide, index) => (
            <div key={slide.id} className="w-full flex-shrink-0 pr-8 lg:pr-24 min-w-full">
              <div className="flex flex-col lg:flex-row items-center justify-start gap-4 lg:gap-12 mx-auto max-w-[1440px]">
              
                {/* Visual Content Column */}
                <div className="order-1 lg:order-1 flex-shrink-0 w-full lg:w-auto h-auto lg:h-[600px] flex items-center justify-center lg:justify-start">
                  <div className="relative w-full aspect-square lg:h-full  lg:w-[500px] xl:w-[600px] rounded-t-[500px] lg:rounded-t-[500px] rounded-b-[20px] overflow-hidden self-center">
                    <div className="relative w-full h-full">
                      <Image
                        src={slide.imageSrc}
                        alt={slide.imageAlt}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 640px) 400px, (max-width: 1024px) 500px, 700px"
                        priority={index === 0} 
                      />
                    </div>
                  </div>
                </div>

                {/* Text Content Column */}
                <div className="order-2 lg:order-2 flex-shrink-0 w-full lg:flex-1 mt-4 lg:mt-0 z-10 relative flex flex-col lg:max-w-[580px] lg:pr-0">
                  <div className="p-responsive text-[#333333]">
                    <div className="flex flex-col gap-8">
                      <p className="-indent-[0.4em] font-playfair font-semibold text-[#2D2D2D] text-2xl md:text-3xl leading-tight">
                        {slide.quote}
                      </p>
                      <div 
                        className="relative ml-4"
                        style={{ 
                          width: slide.logoWidth ? `${slide.logoWidth}px` : '140px',
                          height: slide.logoHeight ? `${slide.logoHeight}px` : '50px'
                        }}
                      >
                         <Image
                          src={slide.logoSrc}
                          alt={slide.logoAlt}
                          fill
                          className="object-contain object-left"
                          priority={index === 0}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-4 md:mt-10 w-full border-t border-[#2D2D2D]/20 pt-6 flex gap-2.5">
        <button
          onClick={prevSlide}
          className="w-[46px] h-[46px] rounded-full border-2 border-[#332E2E] flex items-center justify-center transition-all hover:bg-[#FF5C4D] hover:border-[#FF5C4D] focus:outline-none group"
          aria-label="Previous slide"
        >
          <Image
            src="/carousel-arrow-left.svg"
            alt="Previous"
            width={24}
            height={24}
            className="group-hover:brightness-0 group-hover:invert transition-all"
          />
        </button>
        <button
          onClick={nextSlide}
          className="w-[46px] h-[46px] rounded-full border-2 border-[#332E2E] flex items-center justify-center transition-all hover:bg-[#FF5C4D] hover:border-[#FF5C4D] focus:outline-none group"
          aria-label="Next slide"
        >
          <Image
            src="/carousel-arrow-right.svg"
            alt="Next"
            width={24}
            height={24}
            className="group-hover:brightness-0 group-hover:invert transition-all"
          />
        </button>
      </div>
    </div>
  );
}
