interface CircularChartProps {
  padding?: string;
  chartRef?: React.RefObject<HTMLDivElement | null>;
  outerRingRef?: React.RefObject<SVGCircleElement | null>;
  innerRingRef?: React.RefObject<SVGCircleElement | null>;
  outerBgRef?: React.RefObject<SVGCircleElement | null>;
  innerBgRef?: React.RefObject<SVGCircleElement | null>;
  contentRef?: React.RefObject<HTMLDivElement | null>;
}

export default function CircularChart({ padding = "p-8", chartRef, outerRingRef, innerRingRef, outerBgRef, innerBgRef, contentRef }: CircularChartProps) {
  // Edit these percentages to change the ring values
  const outerRingPercentage = 52;
  const innerRingPercentage = 6;
  
  // Ring dimensions
  const outerRadius = 85;
  const innerRadius = 70;
  
  // Calculate circumferences
  const outerCircumference = 2 * Math.PI * outerRadius;
  const innerCircumference = 2 * Math.PI * innerRadius;
  
  // Calculate stroke dash offsets based on percentages
  // offset = circumference * (1 - percentage/100)
  const outerOffset = outerCircumference * (1 - outerRingPercentage / 100);
  const innerOffset = innerCircumference * (1 - innerRingPercentage / 100);
  
  return (
    <div ref={chartRef} className={`relative w-full h-full ${padding}`}>
      {/* SVG Circles */}
      <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
        {/* Outer Ring Background - Light Beige */}
        <circle
          ref={outerBgRef}
          cx="100"
          cy="100"
          r={outerRadius}
          fill="none"
          stroke="#FDF0DA"
          strokeWidth="5"
          opacity="0.6"
        />
        
        {/* Outer Ring Coral Overlay */}
        <circle
          ref={outerRingRef}
          cx="100"
          cy="100"
          r={outerRadius}
          fill="none"
          stroke="#FF5C4D"
          strokeWidth="5"
          strokeDasharray={`${outerCircumference} ${outerCircumference}`}
          strokeDashoffset={outerOffset}
          strokeLinecap="round"
        />
        
        {/* Inner Ring Background - Light Beige */}
        <circle
          ref={innerBgRef}
          cx="100"
          cy="100"
          r={innerRadius}
          fill="none"
          stroke="#FDF0DA"
          strokeWidth="5"
          opacity="0.6"
        />
        
        {/* Inner Ring Coral Overlay */}
        <circle
          ref={innerRingRef}
          cx="100"
          cy="100"
          r={innerRadius}
          fill="none"
          stroke="#FF5C4D"
          strokeWidth="5"
          strokeDasharray={`${innerCircumference} ${innerCircumference}`}
          strokeDashoffset={innerOffset}
          strokeLinecap="round"
        />
      </svg>
      
      {/* Content */}
      <div ref={contentRef} className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-8">
        <p className="font-playfair font-light text-[60px] md:text-[60px] lg:text-[90px] leading-none text-[#332E2E]">
          52%
        </p>
        <p className="font-poppins text-base md:text-lg lg:text-xl uppercase text-[#332E2E] opacity-60 mt-4 tracking-wide">
          Stays Local
        </p>
        <div className="font-poppins text-xs md:text-sm lg:text-base text-[#332E2E] opacity-60 mt-3 leading-tight">
          <p>Of every dollar spent</p>
          <p>(vs. 6% online)</p>
        </div>
      </div>
    </div>
  );
}

