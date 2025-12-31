"use client";

import Image from "next/image";
import Carousel from "../components/Carousel";
import Carousel02 from "../components/Carousel02";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CircularChart from "../components/CircularChart";
import HeroSection from "../components/HeroSection";
import ContentBlock from "../components/ContentBlock";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // IMPORTANT: We now target the body element for background color changes, not this container.
  // This container will be transparent.
  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);
  const pricingRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  
  // Refs for CircularChart animation
  const circularChartRef = useRef<HTMLDivElement>(null);
  const outerRingRef = useRef<SVGCircleElement>(null);
  const innerRingRef = useRef<SVGCircleElement>(null);
  const outerBgRef = useRef<SVGCircleElement>(null);
  const innerBgRef = useRef<SVGCircleElement>(null);
  const chartContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // --- 1. Set Initial Body Color ---
      gsap.set("body", { backgroundColor: "#FCFBF5" });

      // --- 2. Scroll-Linked Color Interpolation (Scrubbing based on full page scroll) ---
      // We create a single timeline that spans the entire scrollable height of the page.
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          start: "top top", 
          end: "bottom bottom",
          scrub: 1, 
        }
      });

      // Define the color stops relative to the total scroll progress (0 to 1)
      // You can adjust the 'position' parameter (the 0.2, 0.45 etc) to control exactly when the color changes.
      
      // 0% - 20%: Start Color (#FCFBF5)
      
      // 20% - 45%: Transition to lighter cream
      tl.to("body", { backgroundColor: "#FEFEF9", duration: 0.5 }, 0.3);
      
      // 45% - 70%: Hold Middle Color
      
      // 70% - 90%: Transition to End Color (lighter cream)
      tl.to("body", { backgroundColor: "#FFFFFE", duration: 0.4 }, .95);

      // --- CircularChart Animation ---
      if (circularChartRef.current && outerRingRef.current && innerRingRef.current && outerBgRef.current && innerBgRef.current && chartContentRef.current) {
        // Get the computed strokeDashoffset values (the target values)
        const outerFinalOffset = outerRingRef.current.getAttribute('stroke-dashoffset') || '0';
        const innerFinalOffset = innerRingRef.current.getAttribute('stroke-dashoffset') || '0';
        const circumference = 2 * Math.PI * 85; // Match the outer radius
        
        // Animate OUTER RING GROUP (background + overlay) together with dramatic scale
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
              trigger: circularChartRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
        
        // Animate outer ring stroke drawing
        gsap.fromTo(outerRingRef.current,
          { strokeDashoffset: circumference },
          {
            strokeDashoffset: outerFinalOffset,
            duration: 1.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: circularChartRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
        
        // Animate INNER RING GROUP (background + overlay) together with dramatic scale (staggered)
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
            delay: 0.5, // Stagger after outer ring
            scrollTrigger: {
              trigger: circularChartRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
        
        // Animate inner ring stroke drawing
        gsap.fromTo(innerRingRef.current,
          { strokeDashoffset: circumference },
          {
            strokeDashoffset: innerFinalOffset,
            duration: 1.4,
            ease: "power2.out",
            delay: 0.5,
            scrollTrigger: {
              trigger: circularChartRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
        
        // Fade in and scale up the content text (after both rings)
        gsap.fromTo(chartContentRef.current,
          { opacity: 0, scale: 0.5 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "back.out(2)",
            delay: 1.2, // Stagger after inner ring
            scrollTrigger: {
              trigger: circularChartRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

    });

    return () => ctx.revert();
  }, []);

  return (
    // Removed bg-[#dfffde] class here to allow body color to show through
    <div className="min-h-screen flex flex-col overflow-x-hidden font-poppins">
      {/* Navigation Bar */}
      <NavBar />

      {/* Hero Section */}
      <HeroSection
        backgroundImage="/ownerHero.png"
        title={<>They're not customers.<br />They're Villagers.</>}
        description="Villagers helps local businesses like yours focus on the 35% of the people in your immediate area who drive 80% of your revenue — turning everyday purchases into lasting relationships and measurable growth."
        buttonText="Become a villager"
      />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-8 md:px-28 pb-20 relative z-10 space-y-32">
        {/* Content Block 01 */}
        <ContentBlock
          sectionRef={section1Ref}
          title="Every purchase they make tells a story of community Impact."
          description="When a customer see how much of each purchase stays local, supports jobs, and strengthens public services, they come back, not just to shop, but to belong."
          rightComponent={
            <div className="relative w-full aspect-square mx-auto">
              <CircularChart 
                chartRef={circularChartRef}
                outerRingRef={outerRingRef}
                innerRingRef={innerRingRef}
                outerBgRef={outerBgRef}
                innerBgRef={innerBgRef}
                contentRef={chartContentRef}
              />
            </div>
          }
        />


        {/* Carousel Section */}
        <section ref={section2Ref} className="w-full">
          <Carousel />
        </section>  
        <section className="w-full">
          <Carousel02 />
        </section>
        
        {/* Pricing Section */}
        <section ref={pricingRef} className="w-full md:px-8 mb-20">
          <Pricing />
        </section>
      </main>

      <Footer />
    </div>
  );
}

