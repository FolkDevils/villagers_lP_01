import React from 'react';

interface DonutChartProps {
  largePercentage: string;
  largeLabel: string;
  smallPercentage: string;
  smallLabel: string;
  chartRef?: React.RefObject<HTMLDivElement | null>;
  largeCircleRef?: React.RefObject<HTMLDivElement | null>;
  smallCircleRef?: React.RefObject<HTMLDivElement | null>;
  largeTextRef?: React.RefObject<HTMLDivElement | null>;
  smallTextRef?: React.RefObject<HTMLDivElement | null>;
}

export default function DonutChart({
  largePercentage,
  largeLabel,
  smallPercentage,
  smallLabel,
  chartRef,
  largeCircleRef,
  smallCircleRef,
  largeTextRef,
  smallTextRef
}: DonutChartProps) {
  return (
    <div ref={chartRef} className="relative w-full h-full flex items-center justify-center">
      {/* Large Circle (Outer) - Beige */}
      <div ref={largeCircleRef} className="relative w-full aspect-square bg-[#FDF0DA] rounded-full">
        <div ref={largeTextRef} className="absolute top-[18%] md:top-[25%] left-[18%] flex flex-col items-start z-10">
          <span className="font-playfair font-light text-[70px] md:text-[80px] lg:text-[80px] xl:text-[90px] leading-none text-[#332E2E]">
            {largePercentage}
          </span>
          <span className="text-xs md:text-lg lg:text-[18px] uppercase text-[#332E2E] ml-2 md:ml-2 tracking-wide mt-4 font-poppins">
            {largeLabel}
          </span>
        </div>

        {/* Small Circle (Inner) - Coral */}
        <div ref={smallCircleRef} className="absolute bottom-[15%] right-[15%] w-[40%] md:w-[42%] lg:w-[42%] aspect-square bg-[#FF4930] rounded-full flex items-center justify-center z-20">
          <div ref={smallTextRef} className="flex flex-col items-center">
            <span className="font-playfair font-light text-[52px] md:text-[88px] lg:text-[100px] xl:text-[80px] leading-none text-[#FFEFEF]">
              {smallPercentage}
            </span>
            <span className="text-xs md:text-lg lg:text-[18px] mt-2 uppercase text-[#FFEFEF] tracking-wide font-poppins">
              {smallLabel}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

