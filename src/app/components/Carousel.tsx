"use client";

import { useState, useMemo } from "react";
import Image from "next/image";

const SLIDES = [
  {
    id: "impact",
    title: "Share the Impact",
    description: (
      <>
        <p className="mb-2">
          Turn every purchase into a reason to come back.
        </p>
        <p className="mb-2">
          Each purchase triggers a Local Impact Receipt showing how dollars stay
          local and power jobs and a thriving community.
        </p>
        <p className="mb-2">
          Customers see their impact and learn about the power of shopping local.
        </p>
        <p className="mb-2">You collect verified emails automatically.</p>
        <p className="font-bold">
          The Local Impact Receipt builds loyalty through purpose and connection.
        </p>
      </>
    ),
  },
  {
    id: "chart",
    title: "Know Your Customers",
    description: (
      <>
        <p className="mb-6">
          Get to know your real customers — the 35% who drive 80% of your
          revenue.
        </p>
        <p>
          Villagers automatically surfaces your top customers and what keeps them
          coming back, so you can focus where it matters most.
        </p>
      </>
    ),
  },
  {
    id: "engage",
    title: "Engage & Grow",
    description: (
      <>
        <p className="mb-6 font-medium">
          Engage effortlessly. Grow together.
        </p>
        <p className="mb-6">
          Email, SMS, events, and AI insights — all in one place.
        </p>
        <p>
          Your AI assistant, Alder, enriches customer profiles, drafts messages, and identifies your next best actions automatically.
        </p>
      </>
    ),
  },
  {
    id: "value",
    title: "Create Lasting Value",
    description: (
      <>
        <p className="mb-6 font-medium">
          Grow revenue. Build wealth. Enjoy the work.
        </p>
        <p>
          Retain your best customers, elevate your regulars, and turn your data into a transferable asset that doubles your enterprise value.
        </p>
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
          <span className="font-extralight text-[88px] md:text-[88px] lg:text-[88px] xl:text-[120px] leading-none text-[#03879e]">
            85%
          </span>
          <span className="text-xs md:text-sm lg:text-sm ] uppercase text-[#5b5959] ml-2 tracking-wide">
            Total Sales
          </span>
        </div>

        {/* Small Circle (35%) */}
        <div className="absolute bottom-[15%] right-[15%] w-[35%] md:w-[40%] lg:w-[45%] aspect-square bg-[#fbffde] rounded-full flex items-center justify-center z-20">
          <div className="flex flex-col items-center">
            <span className="font-extralight text-[52px] md:text-[64px] lg:text-[68px] xl:text-[88px] leading-none text-[#03879e]">
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

function ImageVisual({ src = "/block02_image_05.png", priority = false }: { src?: string, priority?: boolean }) {
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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const getImageSrc = (id: string) => {
    switch (id) {
      case "engage": return "/block02_image_06.png";
      case "value": return "/block02_image_07.png";
      default: return "/block02_image_05.png";
    }
  };

  return (
    <div className="w-full relative">
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
                <div className={`order-1 lg:order-1 flex-shrink-0 w-full lg:w-auto h-auto lg:h-[700px] flex items-center ${slide.id === "chart" ? "justify-center lg:justify-start" : "justify-center lg:justify-start"}`}>
                  {slide.id === "chart" ? (
                    <div className="relative w-full aspect-square lg:h-full lg:w-[500px] xl:w-[700px]">
                      <ChartVisual />
                    </div>
                  ) : (
                    <div className="relative w-full aspect-square lg:h-full  lg:w-[500px] xl:w-[700px] rounded-t-[500px] lg:rounded-t-[500px] rounded-b-[20px] overflow-hidden self-center">
                      <ImageVisual src={getImageSrc(slide.id)} />
                    </div>
                  )}
                </div>

                {/* Text Content Column */}
                <div className="order-2 lg:order-2 flex-shrink-0 w-full lg:flex-1 mt-4 lg:mt-0 z-10 relative flex flex-col lg:max-w-[580px] pr-16 lg:pr-0">
                  <h1 className="h1-responsive text-[#03879e] mb-4">
                    {slide.title}
                  </h1>
                  <div className="p-responsive text-[#5b5959]">
                    {slide.description}
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
