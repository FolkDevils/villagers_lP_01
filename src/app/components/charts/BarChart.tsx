"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface BarChartProps {
  leftBarImage: string;
  leftBarPercentage: string;
  leftBarLabel: string;
  leftBarDetails?: string[];
  rightBarImage: string;
  rightBarValue: string;
  rightBarLabel: string;
}

export default function BarChart({
  leftBarImage,
  leftBarPercentage,
  leftBarLabel,
  leftBarDetails,
  rightBarImage,
  rightBarValue,
  rightBarLabel,
}: BarChartProps) {
  // Internal Refs
  const chartRef = useRef<HTMLDivElement>(null);
  const leftBarImageRef = useRef<HTMLImageElement>(null);
  const rightBarImageRef = useRef<HTMLImageElement>(null);

  // Animation Logic (Encapsulated)
  useEffect(() => {
    const ctx = gsap.context(() => {
      // --- Chart Animation (Bars growing up) ---
      if (chartRef.current) {
        const bars = chartRef.current.querySelectorAll(":scope > div");
        
        gsap.fromTo(bars,
          { height: "0%" },
          {
            height: (index) => index === 0 ? "80%" : "100%",
            duration: 1.5,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: chartRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );

        const greenOverlay = chartRef.current.querySelector(".green-overlay");
        const greenContent = chartRef.current.querySelector(".green-content");

        if (greenOverlay) {
           gsap.fromTo(
            greenOverlay,
            { height: "0%" },
            {
              height: "60%",
              duration: 1.5,
              ease: "power2.out",
              delay: 0, // start growing immediately
              scrollTrigger: {
                trigger: chartRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
              }
            }
          );

          // Fade in the text slightly after the overlay starts growing
          if (greenContent) {
            gsap.fromTo(
              greenContent,
              { opacity: 0, y: 12 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
                delay: 0.25,
                scrollTrigger: {
                  trigger: chartRef.current,
                  start: "top 80%",
                  toggleActions: "play none none reverse"
                }
              }
            );
          }
        }

        const circle = chartRef.current.querySelector(".chart-circle");
        const circleText = chartRef.current.querySelector(".chart-circle-text");

        if (circle) {
          gsap.fromTo(circle,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
              delay: 1.2,
              scrollTrigger: {
                trigger: chartRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }

        if (circleText) {
           gsap.fromTo(circleText,
            { opacity: 0, y: 10 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
              delay: 1.6,
              scrollTrigger: {
                trigger: chartRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      }

      // --- Parallax Effect for Chart Images ---
      if (leftBarImageRef.current && chartRef.current) {
        gsap.set(leftBarImageRef.current, { scale: 1.3, yPercent: -5 });

        gsap.to(leftBarImageRef.current, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: chartRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      }

      if (rightBarImageRef.current && chartRef.current) {
         gsap.set(rightBarImageRef.current, { scale: 1.3, yPercent: -5 });

         gsap.to(rightBarImageRef.current, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: chartRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full max-w-[500px] lg:max-w-none lg:w-full justify-self-end lg:justify-self-end order-1 lg:order-2 lg:col-span-7">
      <div ref={chartRef} className="aspect-[1] relative w-full lg:max-w-full flex items-end ml-auto justify-between">
        
        {/* Left Bar */}
        <div className="w-[48%] h-[80%] relative shrink-0">
          <div className="absolute inset-0 rounded-t-[16px] rounded-b-[20px] overflow-hidden">
            {/* Background Image */}
            <Image
              ref={leftBarImageRef}
              src={leftBarImage}
              alt={leftBarLabel}
              fill
              className="object-cover object-center"
            />
            
            {/* Coral Shape Overlay at Bottom with text contained inside to guarantee positioning */}
            <div className="green-overlay absolute bottom-0 left-0 right-0 h-[70%] bg-[#FF4930] rounded-t-[16px] z-10 flex flex-col items-center justify-center p-4">
              <span className="font-playfair font-semibold text-[60px] md:text-[60px] lg:text-[65px] leading-none text-[#FCFBF5]">
                {leftBarPercentage}
              </span>
              <span className="text-xs md:text-base uppercase text-[#FCFBF5] font-medium mt-2 lg:mt-2">
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
          <div className="absolute inset-0 rounded-t-[16px] rounded-b-[20px] overflow-hidden">
            <Image
              ref={rightBarImageRef}
              src={rightBarImage}
              alt={rightBarLabel}
              fill
              className="object-cover object-center"
            />
          </div>
        
          {/* Circle Content at Bottom */}
          <div className="chart-circle absolute left-1/2 bottom-8 -translate-x-1/2 w-[85%] aspect-square bg-[#FF4930] opacity-70 rounded-full flex flex-col items-center justify-center p-4 z-10 text-center">
            <div className="chart-circle-text flex flex-col items-center">
              <span className="font-playfair font-semibold text-[70px]  -mt-6  leading-none text-[#FCFBF5]">
                {rightBarValue}
              </span>
              <span className="text-xs md:text-sm uppercase text-[#FCFBF5] font-medium mt-4 md:mt-4 leading-tight">
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
