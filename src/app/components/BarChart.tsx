"use client";

import Image from "next/image";
import { useRef, forwardRef } from "react";

interface BarChartProps {
  leftBarImage: string;
  leftBarPercentage: string;
  leftBarLabel: string;
  leftBarDetails?: string[];
  rightBarImage: string;
  rightBarValue: string;
  rightBarLabel: string;
  chartRef?: React.RefObject<HTMLDivElement | null>;
  leftBarImageRef?: React.RefObject<HTMLImageElement | null>;
  rightBarImageRef?: React.RefObject<HTMLImageElement | null>;
}

export default function BarChart({
  leftBarImage,
  leftBarPercentage,
  leftBarLabel,
  leftBarDetails,
  rightBarImage,
  rightBarValue,
  rightBarLabel,
  chartRef,
  leftBarImageRef,
  rightBarImageRef
}: BarChartProps) {
  return (
    <div className="relative w-full max-w-[500px] lg:max-w-none lg:w-full justify-self-end lg:justify-self-end order-1 lg:order-2 lg:col-span-7">
      <div ref={chartRef} className="aspect-[1.1] relative w-full lg:max-w-full flex items-end ml-auto justify-between">
        
        {/* Left Bar */}
        <div className="w-[48%] h-[80%] relative shrink-0">
          <div className="absolute inset-0 rounded-t-[1000px] rounded-b-[20px] overflow-hidden">
            {/* Background Image */}
            <Image
              ref={leftBarImageRef}
              src={leftBarImage}
              alt={leftBarLabel}
              fill
              className="object-cover object-center"
            />
            
            {/* Coral Shape Overlay at Bottom */}
            <div className="green-overlay absolute bottom-0 left-0 right-0 h-[50%] bg-[#FF4930] rounded-t-[1000px] z-0" />

            {/* Content - Positioned relative to the bar */}
            <div className="left-bar-text absolute inset-0  flex flex-col items-center justify-end pb-12 z-10">
              <span className="font-playfair font-semibold text-[50px] md:text-[60px] lg:text-[80px]   leading-none text-[#FCFBF5]">
                {leftBarPercentage}
              </span>
              <span className="text-sm md:text-base uppercase text-[#FCFBF5] font-medium mt-2">
                {leftBarLabel}
              </span>
              {leftBarDetails && leftBarDetails.length > 0 && (
                <div className="text-xs md:text-sm text-[#FCFBF5] text-center mt-2 leading-tight">
                  {leftBarDetails.map((detail, index) => (
                    <p key={index}>{detail}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Bar */}
        <div className="w-[48%] h-full relative shrink-0">
          <div className="absolute inset-0 rounded-t-[500px] rounded-b-[20px] overflow-hidden">
            <Image
              ref={rightBarImageRef}
              src={rightBarImage}
              alt={rightBarLabel}
              fill
              className="object-cover object-center"
            />
          </div>
        
          {/* Circle Content at Bottom */}
          <div className="chart-circle absolute bottom-8 left-1/2 -translate-x-1/2 w-[85%] aspect-square bg-[#FF4930] opacity-70 rounded-full flex flex-col items-center justify-center p-4 z-10 text-center">
            <div className="chart-circle-text flex flex-col items-center">
              <span className="font-playfair font-semibold text-[60px] md:text-[80px] -mt-6 lg:text-[90px] leading-none text-[#FCFBF5]">
                {rightBarValue}
              </span>
              <span className="text-xs md:text-sm uppercase text-[#FCFBF5] font-medium mt-6 leading-tight">
                {rightBarLabel.split(' ').map((word, index, arr) => (
                  index < arr.length - 1 ? <span key={index}>{word} <br/></span> : word
                ))}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

