"use client";

import { useEffect, useRef } from "react";
import DonutChart from "../charts/DonutChart";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChartSlide } from "../../../types/slides";

gsap.registerPlugin(ScrollTrigger);

// --- Sub-Component: Animated Chart Slide ---
// Fixes Ref Collision by isolating state per-slide
export default function AnimatedChartSlide({ slide }: { slide: ChartSlide }) {
  const donutChartRef = useRef<HTMLDivElement>(null);
  const largeCircleRef = useRef<HTMLDivElement>(null);
  const smallCircleRef = useRef<HTMLDivElement>(null);
  const largeTextRef = useRef<HTMLDivElement>(null);
  const smallTextRef = useRef<HTMLDivElement>(null);

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

  return (
    // Updated container: fills height, maintains square aspect ratio, centers content
    <div className="relative h-full w-full flex items-center justify-center">
      <div className="relative h-full aspect-square max-w-full">
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
    </div>
  );
}
