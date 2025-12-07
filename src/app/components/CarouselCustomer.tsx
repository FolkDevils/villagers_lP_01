"use client";

import { useState, useMemo } from "react";
import Image from "next/image";

const SLIDES = [
  {
    id: "impact",
    title: "So much more than shopping.",
    description: (
      <>
        <p className="mb-4">
        there&apos;s a reason you return to your favorite stores. Maybe you love the owner. Maybe you find friends there. Maybe you love the service or the products.   </p>
        <p className="mb-4">
        Villagers knows there is nothing more valuable than maintaining a supportive and thriving place for you to go.
         </p>
        <p className="font-bold">
        Your Local Impact Receipt builds real loyalty and connection between you and the places you love. </p>
      </>
    ),
  },
  {
    id: "chart",
    title: "It’s your Village.<br /> Be a part of it.",
    description: (
      <>
        <p className="mb-6">
        you&apos;ll get to know the shops and stores you love — and they’ll get to know you and what you love.
        </p>
        <p>
        Villagers makes you the top priority of their business. you’re as valued as you should be.
          </p>
      </>
    ),
  },
  {
    id: "engage",
    title: "They thrive, you win.",
    description: (
      <>
        <p className="mb-6 font-medium">
        Villagers AI system does so much for shop Owners. 
        </p>
        <p className="mb-6">
        Email, SMS, events, and AI insights — all in one place.
        </p>
        <p >
        these tools allow them to keep in touch with you the very best way, personally and authentically.</p>
    
      </>
    ),
  },
  {
    id: "value",
    title: "Be a part of it all.",
    description: (
      <>
        <p className="mb-6 ">
        Nothing feels better than a spirit of belonging.
        </p>
        <p >
        Villagers brings communities together. Our shared goal is for the neighborhood you love and live in to thrive and prosper. Together.  </p>
       
      </>
    ),
  },
];

function ChartVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Large Circle (85%) */}
      <div className="relative w-full aspect-square bg-[#84fcdb] rounded-full">
        <div className="absolute top-[25%] left-[18%] flex flex-col items-start z-10">
          <span className="font-extralight text-[88px] md:text-[88px] lg:text-[88px] xl:text-[100px] leading-none text-[#03879e]">
            85%
          </span>
          <span className="text-xs md:text-sm lg:text-sm ] uppercase text-[#5b5959] ml-2 tracking-wide">
            Total Sales
          </span>
        </div>

        {/* Small Circle (35%) */}
        <div className="absolute bottom-[15%] right-[15%] w-[35%] md:w-[40%] lg:w-[45%] aspect-square bg-[#fbffde] rounded-full flex items-center justify-center z-20">
          <div className="flex flex-col items-center">
            <span className="font-extralight text-[52px] md:text-[64px] lg:text-[68px] xl:text-[78px] leading-none text-[#03879e]">
              35%
            </span>
            <span className="text-[10px] md:text-xs lg:text-sm  uppercase text-[#5b5959] tracking-wide">
              customers
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImageVisual({ src = "/Customer_07.png", priority = false }: { src?: string, priority?: boolean }) {
  return (
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt="Share the Impact"
        fill
        className="object-cover object-center"
        sizes="(max-width: 640px) 400px, (max-width: 1024px) 500px, 700px"
        priority={priority}
      />
    </div>
  );
}

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null); // Reset touch end
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

  const getImageSrc = (id: string) => {
    switch (id) {
      case "engage": return "/Customer_10.png";
      case "value": return "/Customer_11.png";
      default: return "/Customer_07.png";
    }
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
          {SLIDES.map((slide) => (
            <div key={slide.id} className="w-full flex-shrink-0 pr-8 lg:pr-24 min-w-full">
              <div className="flex flex-col lg:flex-row items-center justify-start gap-4 lg:gap-12 mx-auto max-w-[1440px]">
              
                {/* Visual Content Column */}
                <div className={`order-1 lg:order-1 flex-shrink-0 w-full lg:w-auto h-auto lg:h-[600px] flex items-center ${slide.id === "chart" ? "justify-center lg:justify-start" : "justify-center lg:justify-start"}`}>
                  {slide.id === "chart" ? (
                    <div className="relative w-full aspect-square lg:h-full lg:w-[500px] xl:w-[600px]">
                      <ChartVisual />
                    </div>
                  ) : (
                    <div className="relative w-full aspect-square lg:h-full  lg:w-[500px] xl:w-[600px] rounded-t-[500px] lg:rounded-t-[500px] rounded-b-[20px] overflow-hidden self-center">
                      <ImageVisual src={getImageSrc(slide.id)} />
                    </div>
                  )}
                </div>

                {/* Text Content Column */}
                <div className="order-2 lg:order-2 flex-shrink-0 w-full lg:flex-1 mt-4 lg:mt-0 z-10 relative flex flex-col lg:max-w-[580px] pr-4 lg:pr-0">
                  <h1 
                    className="h1-responsive bg-gradient-to-b from-[#0AC200] pr-0 md:pr-0 to-[#078930] bg-clip-text text-transparent mb-4"
                    dangerouslySetInnerHTML={{ __html: slide.title }}
                  />
                  <div className="p-responsive text-[#5b5959] leading-snug">
                    {slide.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="mt-4 md:mt-10 w-full border-t border-[#03879e]/20 pt-6 flex gap-4">
        <button
          onClick={prevSlide}
          className="transition-opacity hover:opacity-70 focus:outline-none"
          aria-label="Previous slide"
        >
          <Image
            src="/carousel-arrow-left.svg"
            alt="Previous"
            width={46}
            height={46}
          />
        </button>
        <button
          onClick={nextSlide}
          className="transition-opacity hover:opacity-70 focus:outline-none"
          aria-label="Next slide"
        >
          <Image
            src="/carousel-arrow-right.svg"
            alt="Next"
            width={46}
            height={46}
          />
        </button>
      </div>
    </div>
  );
}
