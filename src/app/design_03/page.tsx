"use client";

import Image from "next/image";
import Carousel from "../components/CarouselCustomer";
import Carousel02 from "../components/CarouselCustmer02";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CircularChart from "../components/CircularChart";
import HeroSection from "../components/HeroSection";
import ContentBlock from "../components/ContentBlock";
import BarChart from "../components/BarChart";
import NewsletterSignup from "../components/NewsletterSignup";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);
  const pricingRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  
  // Refs for second section animation
  const section2ContentRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const leftBarImageRef = useRef<HTMLImageElement>(null);
  const rightBarImageRef = useRef<HTMLImageElement>(null);
  const headerContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // --- 1. Set Initial Body Color ---
      gsap.set("body", { backgroundColor: "#FCFBF5" });
      
      // --- Second Section Scroll Animations ---
      
      // 1. Text Content Animation
      if (section2ContentRef.current) {
        gsap.fromTo(section2ContentRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section2ContentRef.current,
              start: "top 80%", // Start when top of content hits 80% of viewport height
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // 2. Chart Animation (Bars growing up)
      if (chartRef.current) {
        // Select the bar containers (divs that are direct children of the flex container)
        // Adjust selector based on structure: The flex container has two bar divs
        const bars = chartRef.current.querySelectorAll(":scope > div");
        
        // We need to animate the height of the bars, but keep the content pinned to the bottom.
        // Since we are using flex-end alignment in the parent, height animation works well.
        
        gsap.fromTo(bars,
          { height: "0%" },
          {
            height: (index) => index === 0 ? "80%" : "100%", // Restore original heights: 80% for left, 100% for right
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

        // Green Overlay Animation (Left Bar) - Grows after main bar starts
        const greenOverlay = chartRef.current.querySelector(".green-overlay");
        const leftBarText = chartRef.current.querySelector(".left-bar-text");

        if (greenOverlay) {
           gsap.fromTo(greenOverlay,
            { height: "0%" },
            {
              height: "50%",
              duration: 1.5,
              ease: "power2.out",
              delay: 0.5, // Starts after main bar growth begins
              scrollTrigger: {
                trigger: chartRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }

        // Left Bar Text Animation - Fades in as green overlay grows
        if (leftBarText) {
          gsap.fromTo(leftBarText,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
              delay: 1.2, // Starts midway through green overlay growth
              scrollTrigger: {
                trigger: chartRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }

        // Circle Animation (Right Bar) - Plays as green bar is finishing
        const circle = chartRef.current.querySelector(".chart-circle");
        const circleText = chartRef.current.querySelector(".chart-circle-text");

        if (circle) {
          gsap.fromTo(circle,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out", // Removed bounce
              delay: 1.2, // Starts as green overlay is nearing completion (0.5 + 1.5 duration)
              scrollTrigger: {
                trigger: chartRef.current,
                start: "top 80%", // Sync trigger with bars
                toggleActions: "play none none reverse"
              }
            }
          );
        }

        // Text inside circle fades in as circle completes
        if (circleText) {
           gsap.fromTo(circleText,
            { opacity: 0, y: 10 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
              delay: 1.6, // Fades in as circle finishes
              scrollTrigger: {
                trigger: chartRef.current,
                start: "top 80%", // Sync trigger with bars/circle
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      }


      // --- 3. Scroll-Linked Color Interpolation ---
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          start: "top top", 
          end: "bottom bottom",
          scrub: 1, 
        }
      });
      
      tl.to("body", { backgroundColor: "#FEFEF9", duration: 0.5 }, 0.3);
      tl.to("body", { backgroundColor: "#FFFFFE", duration: 0.5 }, 1);


      // --- 4. Parallax Effect for Chart Images ---
      // Left Bar Image
      if (leftBarImageRef.current) {
        // Set initial scale and position to ensure coverage
        gsap.set(leftBarImageRef.current, { scale: 1.3, yPercent: -10 });
        
        gsap.to(leftBarImageRef.current, {
          yPercent: 30, // Move from -10 to 10 for parallax range
          ease: "none",
          scrollTrigger: {
            trigger: chartRef.current,
            start: "top bottom", 
            end: "bottom top",   
            scrub: true
          }
        });
      }

      // Right Bar Image
      if (rightBarImageRef.current) {
         // Set initial scale and position to ensure coverage
         gsap.set(rightBarImageRef.current, { scale: 1.3, yPercent: -10 });

         gsap.to(rightBarImageRef.current, {
          yPercent: 30, // Move from -10 to 10 for parallax range
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
    // Removed bg-[#dfffde] class here to allow body color to show through
    <div className="min-h-screen flex flex-col overflow-x-hidden font-poppins">
      {/* Navigation Bar */}
      <NavBar />

      {/* Hero Section */}
      <HeroSection
        backgroundImage="/customerHero.png"
        title={<>You aren’t a customer,<br />You’re a Villager.</>}
        description="We are people. We are neighbors, friends, and the ones who love our community. Villagers helps the business you love to see you as just far more than just a customer."
        buttonText="Join the Village"
      />

      {/* Main Content */}
   {/* Main Content */}
   <main className="flex-1 w-full max-w-[1600px] mx-auto px-8 md:px-28 pb-20 relative z-10 space-y-32">
        {/* Content Block 01 */}
        <ContentBlock
          sectionRef={section1Ref}
          title="You can see how your dollars support your community."
          description="When you shop in your Village, you'll be shown just how much you helped your community, and not some faceless corporation hundreds of miles away."
          rightComponent={
            <BarChart
            leftBarImage="/Customer_04.png"
            leftBarPercentage="52%"
            leftBarLabel="Stays Local"
            leftBarDetails={["Of every dollar spent", "(vs. 6% online)"]}
            rightBarImage="/Customer_05.png"
            rightBarValue="1.5x"
            rightBarLabel="Economic Multiplier"
            chartRef={chartRef}
            leftBarImageRef={leftBarImageRef}
            rightBarImageRef={rightBarImageRef}
          />
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
        <section ref={pricingRef} className="w-full md:px-0 mb-20">
          <NewsletterSignup />
        </section>
      </main>

      <Footer />
    </div>
  );
}

