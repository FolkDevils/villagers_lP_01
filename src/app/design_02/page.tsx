"use client";

import Image from "next/image";
import Carousel from "../components/Carousel";
import Carousel02 from "../components/Carousel02";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
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
      tl.to("body", { backgroundColor: "#51FFD1", duration: 0.4 }, .95);

    });

    return () => ctx.revert();
  }, []);

  return (
    // Removed bg-[#dfffde] class here to allow body color to show through
    <div className="min-h-screen flex flex-col overflow-x-hidden font-work">
      {/* Header / Logo Section */}
      <header className="w-full pt-12 px-4 sm:px-8 flex justify-center relative z-20">
        <div className="relative w-full max-w-[1361px] aspect-[1361/476]">
           <Image
            src="/logo_villagers.svg"
            alt="Villagers Logo"
            fill
            className="object-contain object-top"
            priority
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto px-8 md:px-28 pb-20 relative z-10 space-y-32">
        {/* Hero Section */}
        <section ref={section1Ref} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 -mt-10 md:-mt-20 items-start">
          
          {/* Left Text Content */}
          <div className="flex flex-col gap-4 max-w-[580px] lg:mt-20 order-2 lg:order-1 lg:col-span-5">
          <h1 className="h1-responsive bg-gradient-to-b from-[#0AC200] to-[#078930] bg-clip-text text-transparent">
 
          They’re not customers. 
          They’re Villagers.
            </h1>
            
            <p className="p-responsive text-[#5b5959] leading-snug">
            Villagers helps local businesses like yours focus on the 35% of the people in your immediate area  who drive 80% of your revenue — turning everyday purchases into lasting relationships and measurable growth.    </p>
            
            <div>
            <button className="border-[3px] mt-4 border-[#0ac200] rounded-full px-6 py-4 text-[#0ac200] font-semibold text-base uppercase hover:bg-[#0ac200] hover:text-[#dfffde]  transition-colors cursor-pointer bg-transparent">
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
            <h1 className="h1-responsive bg-gradient-to-b from-[#0AC200] to-[#078930] bg-clip-text text-transparent">
            Every purchase they make tells a story of community Impact.
            </h1>
            
            <div className="p-responsive text-[#5b5959] space-y-6 leading-snug">
              <p>
              When a customer see how much of each purchase stays local, supports jobs, and strengthens public services, they come back, not just to shop, but to belong.
              </p>
            </div>
          </div>

          {/* Right Bar Chart Content */}
          <div className="relative w-full max-w-[500px] lg:max-w-none lg:w-full justify-self-end lg:justify-self-end order-1 lg:order-2 lg:col-span-7">
            <div className="aspect-[1.1] relative w-full lg:max-w-full flex items-end ml-auto justify-between">
              
              {/* Left Bar - 52% */}
              <div className="w-[48%] h-[80%] relative shrink-0">
                 <div className="absolute inset-0 rounded-t-[1000px] rounded-b-[20px] overflow-hidden">
                   {/* Background Image */}
                   <Image
                    src="/imag_barLeft.png"
                    alt="Stays Local"
                    fill
                    className="object-cover object-center"
                  />
                  
                  {/* Green Shape Overlay at Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-[#3effaf] rounded-t-[1000px] z-0" />

                 {/* Content - Positioned relative to the bar */}
                 <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 z-10">
                    <span className="font-light text-[50px] md:text-[60px] lg:text-[80px] leading-none text-[#028a6f]">52%</span>
                    <span className="text-sm md:text-base uppercase text-[#5b5959] font-medium mt-2">Stays Local</span>
                    <div className="text-xs md:text-sm text-[#5b5959] text-center mt-2 leading-tight">
                      <p>Of every dollar spent</p>
                      <p>(vs. 6% online)</p>
                    </div>
                 </div>
                 </div>
              </div>

              {/* Right Bar - 1.5x */}
              <div className="w-[48%] h-full relative shrink-0">
                <div className="absolute inset-0 rounded-t-[500px] rounded-b-[20px] overflow-hidden">
                   <Image
                    src="/block01_image.png"
                    alt="Economic Multiplier"
                    fill
                    className="object-cover object-center"
                  />
                  {/* Tint Overlay */}
                  <div className="absolute inset-0 bg-[#00ccd3]/50 mix-blend-multiply" />
                </div>
                
                {/* Circle Content at Bottom */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[85%] aspect-square bg-[#3effdc] rounded-full flex flex-col items-center justify-center p-4 z-10 text-center">
                    <span className="font-light text-[60px] md:text-[80px] lg:text-[90px] leading-none text-[#028a6f]">1.5x</span>
                    <span className="text-xs md:text-sm uppercase text-[#5b5959] font-medium mt-2 leading-tight">
                      Economic <br/> Multiplier
                    </span>
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
        {/* Pricing Section - Replaced with Join Form */}
          
        <section ref={pricingRef} className="w-full  md:px-8 mb-20">
          <Pricing />
        </section>  
        
    
            </div>    
            
            <Footer />
    </div>
  );
}

