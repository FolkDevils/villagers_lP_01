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
    quote: "“Villagers helped us reconnect with the customers who make our shop thrive.”",
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
    logoWidth: 110,
    logoHeight: 110,
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  return (
    <div className="w-full relative">
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
                <div className="order-1 lg:order-1 flex-shrink-0 w-full lg:w-auto h-auto lg:h-[700px] flex items-center justify-center lg:justify-start">
                  <div className="relative w-full aspect-square lg:h-full  lg:w-[500px] xl:w-[700px] rounded-t-[500px] lg:rounded-t-[500px] rounded-b-[20px] overflow-hidden self-center">
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
                <div className="order-2 lg:order-2 flex-shrink-0 w-full lg:flex-1 mt-4 lg:mt-0 z-10 relative flex flex-col lg:max-w-[580px] pr-16 lg:pr-0">
                  <div className="p-responsive text-[#5b5959]">
                    <div className="flex flex-col gap-8">
                      <p className="-indent-[0.4em] pl-[0.4em] text-[#03879e] text-[40px] leading-tight">
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
      <div className="mt-10 w-full border-t border-[#03879e]/20 pt-6 flex gap-4">
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
