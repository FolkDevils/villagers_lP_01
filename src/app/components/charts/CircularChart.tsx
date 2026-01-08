"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CircularChartProps {
  padding?: string;
}

export default function CircularChart({ padding = "p-8" }: CircularChartProps) {
  // Edit these percentages to change the ring values
  const outerRingPercentage = 52;
  const innerRingPercentage = 6;
  
  // Ring dimensions
  const outerRadius = 82;
  const innerRadius = 72;
  
  // Calculate circumferences
  const outerCircumference = 2 * Math.PI * outerRadius;
  const innerCircumference = 2 * Math.PI * innerRadius;
  
  // Calculate stroke dash offsets based on percentages
  const outerOffset = outerCircumference * (1 - outerRingPercentage / 100);
  const innerOffset = innerCircumference * (1 - innerRingPercentage / 100);

  // Internal Refs
  const chartRef = useRef<HTMLDivElement>(null);
  const outerRingRef = useRef<SVGCircleElement>(null);
  const innerRingRef = useRef<SVGCircleElement>(null);
  const outerBgRef = useRef<SVGCircleElement>(null);
  const innerBgRef = useRef<SVGCircleElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Animation Logic (Encapsulated)
  useEffect(() => {
    const ctx = gsap.context(() => {
      // --- 3. CircularChart Animation ---
      if (chartRef.current && outerRingRef.current && innerRingRef.current && outerBgRef.current && innerBgRef.current && contentRef.current) {
        
        // Animate OUTER RING GROUP
        gsap.fromTo([outerBgRef.current, outerRingRef.current],
          { 
            scale: 0.5,
            opacity: 0,
            transformOrigin: "center center"
          },
          {
            scale: 1,
            opacity: 1,
            duration: 1.4,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: chartRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
        
        gsap.fromTo(outerRingRef.current,
          { strokeDashoffset: outerCircumference },
          {
            strokeDashoffset: outerOffset,
            duration: 1.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: chartRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
        
        // Animate INNER RING GROUP
        gsap.fromTo([innerBgRef.current, innerRingRef.current],
          { 
            scale: 0.5,
            opacity: 0,
            transformOrigin: "center center"
          },
          {
            scale: 1,
            opacity: 1,
            duration: 1.4,
            ease: "back.out(1.7)",
            delay: 0.5,
            scrollTrigger: {
              trigger: chartRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
        
        gsap.fromTo(innerRingRef.current,
          { strokeDashoffset: innerCircumference },
          {
            strokeDashoffset: innerOffset,
            duration: 1.4,
            ease: "power2.out",
            delay: 0.5,
            scrollTrigger: {
              trigger: chartRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
        
        // Fade in content
        gsap.fromTo(contentRef.current,
          { opacity: 0, scale: 0.5 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "back.out(2)",
            delay: 1.2,
            scrollTrigger: {
              trigger: chartRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    return () => ctx.revert();
  }, [outerCircumference, innerCircumference, outerOffset, innerOffset]);
  
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
          stroke="#FF4930"
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
          stroke="#FF4930"
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
