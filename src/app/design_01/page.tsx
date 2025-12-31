"use client";

import Image from "next/image";
import Carousel from "../components/Carousel";
import Carousel02 from "../components/Carousel02";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // --- 1. Set Initial Body Color ---
      gsap.set("body", { backgroundColor: "#D2FFCA" });

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
      
      // 0% - 20%: Start Color (#dfffde)
      
      // 20% - 45%: Transition to Middle Color (#fbffde)
      tl.to("body", { backgroundColor: "#fbffde", duration: 0.5 }, 0.3);
      
      // 45% - 70%: Hold Middle Color
      
      // 70% - 90%: Transition to End Color (#51ffd1)
      tl.to("body", { backgroundColor: "#51ffd1", duration: 0.5 }, 1);

    });

    return () => ctx.revert();
  }, []);

  return (
    // Removed bg-[#dfffde] class here to allow body color to show through
    <div className="min-h-screen flex flex-col overflow-x-hidden font-poppins">
      {/* Navigation Bar */}
      <NavBar />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-8 md:px-28 pb-20 relative z-10 space-y-32">
        {/* Hero Section */}
        <section ref={section1Ref} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 -mt-10 md:-mt-20 items-start">
          
          {/* Left Text Content */}
          <div className="flex flex-col gap-4 max-w-[580px] lg:mt-20 order-2 lg:order-1 lg:col-span-5">
            <h1 className="h1-responsive text-[#332E2E]">
              Where loyalty <br />
              get’s personal.
            </h1>
            
            <p className="p-responsive text-[#5b5959] leading-snug">
              Villagers helps local businesses like yours focus on the 35% of customers who drive 80% of your revenue — turning everyday purchases into lasting relationships and measurable growth.
            </p>
            
            <div>
              <button className="border-[3px] mt-4 border-[#00d29e] rounded-full px-6 py-4 text-[#00d29e] font-semibold text-base uppercase hover:bg-[#00d29e] hover:text-white transition-colors cursor-pointer">
                Become a villager
              </button>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="relative w-full max-w-[500px] lg:max-w-none lg:w-full justify-self-end lg:justify-self-end order-1 lg:order-2 lg:col-span-7">
            <div className="aspect-[0.9] relative w-full lg:max-w-full ml-auto">
              <div className="absolute inset-0 rounded-t-[550px] rounded-b-[30px] overflow-hidden ">
                <Image
                  src="/hero_image.png"
                  alt="Villagers Hero"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
            </div>
          </div>
          
        </section>

        {/* Content Block 01 */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10 pb-20 lg:gap-20 items-end">
           {/* Left Text Content */}
           <div className="flex flex-col gap-4 max-w-[580px] order-2 lg:order-1 lg:col-span-5">
            <h1 className="h1-responsive text-[#332E2E]">
              Local Businesses<br /> Have a Superpower
            </h1>
            
            <div className="p-responsive text-[#5b5959] space-y-6 leading-snug">
              <p>
                While the big guys chase clicks and algorithms, you hold what customers truly crave: real, in-person connection.
              </p>
              <p>
                We’re all tired of soulless transactions — your superpower is creating experiences that help people belong.
              </p>
              <p className="font-extrabold text-[#5b5959]">
                Villagers helps you turn that IRL <br />
                superpower into measurable growth.
              </p>
            </div>
          </div>

          {/* Right Bar Chart Content */}
          <div className="relative w-full max-w-[500px] lg:max-w-none lg:w-full justify-self-end lg:justify-self-end order-1 lg:order-2 lg:col-span-7">
          <div className="aspect-[1.1] relative w-full lg:max-w-full flex items-end ml-auto">
              {/* Bar 1 - Width 15% */}
              <div className="w-[16%] h-[15%] inset-0  bg-[#3eff78] rounded-t-[550px] rounded-b-[30px] shrink-0 mr-[2%]" />
              
              {/* Bar 2 - Width 15% */}
              <div className="w-[16%] h-[30%] bg-[#3eff78] rounded-t-[550px] rounded-b-[30px] shrink-0 mr-[2%]" />
              
              {/* Bar 3 - Width 15% */}
              <div className="w-[16%] h-[45%] bg-[#3effaf] rounded-t-[550px] rounded-b-[30px] shrink-0 mr-[2%]" />
              
              {/* Image Bar - Width 44% */}
              {/* Total Width: 15 + 15 + 15 + 44 + (3.66 * 3) = ~100% */}
              <div className="relative w-[44%] h-full shrink-0 rounded-t-[550px] rounded-b-[30px] overflow-hidden flex items-end justify-center pb-[15%]">
                 {/* Tint Overlay */}
                 <div className="absolute inset-0 z-10 bg-[#01966a]/50 mix-blend-overlay pointer-events-none" />
                 <div className="absolute inset-0 z-10 bg-[#00ccd3]/90 mix-blend-multiply pointer-events-none" />
                 
                 <Image
                  src="/block01_image.png"
                  alt="Growth Chart"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 44vw, 300px"
                />

                {/* Floating Card */}
                <div className="bg-[#dfffde] rounded-[16px] p-3 sm:p-6 flex flex-col items-center justify-center shadow-lg z-20 w-[80%] max-w-[200px] relative">
                  <span className="font-playfair font-semibold text-[10cqw] lg:text-[60px] xl:text-[80px] leading-none text-[#00d257]">70%</span>
                  <span className="text-sm uppercase text-[#5b5959]">growth</span>
               </div>
              </div>
            </div>
          </div>
        </section>


        {/* Carousel Section */}
        <section ref={section2Ref} className="w-full">
          <Carousel />
        </section>  
        <section className="w-full">
          <Carousel02 />
        </section> 
        </main>

        <div className="flex-1 w-full max-w-[1440px] mx-auto px-8 md:px-8 pb-20 relative z-10 space-y-32">
        {/* Pricing Section */}
        <section ref={pricingRef} className="w-full  md:px-8 mb-20">
          <Pricing />
        </section>  
        
    
            </div>    
            
            <Footer />
    </div>
  );
}

