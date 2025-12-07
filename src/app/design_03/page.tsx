"use client";

import Image from "next/image";
import Carousel from "../components/CarouselCustomer";
import Carousel02 from "../components/CarouselCustmer02";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);
  const pricingRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);
  
  // Refs for animation
  const heroImageRef = useRef<HTMLImageElement>(null);
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const headerContentRef = useRef<HTMLDivElement>(null);
  
  // Refs for second section animation
  const section2ContentRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const leftBarImageRef = useRef<HTMLImageElement>(null);
  const rightBarImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // --- 1. Set Initial Body Color ---
      gsap.set("body", { backgroundColor: "#D2FFCA" });

      // --- 2. Entry Animation (Graceful Build) ---
      // Container grows from smaller size
      gsap.fromTo(heroContainerRef.current,
        { scale: 0.8 },
        { scale: 1, duration: 1.5, ease: "power2.out" }
      );

      // Image scales down to 100 (counter-scale effect)
      gsap.fromTo(heroImageRef.current,
        { scale: 1.3 },
        { scale: 1, duration: 1.5, ease: "power2.out" }
      );

      // Logo scales down from larger size
      if (logoRef.current) {
        gsap.fromTo(logoRef.current,
          { scale: 1.3, transformOrigin: "top center" },
          { scale: 1, duration: 1.5, ease: "power2.out" }
        );
      }

      // Header Content Staggered Fade In
      // Selects children of the header content container (h1, p, button container)
      if (headerContentRef.current) {
         gsap.fromTo(headerContentRef.current.children,
          { y: 20, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1.5, // Matched duration to logo/image animation
            stagger: 0.3, // Increased stagger for more distinct steps
            ease: "power2.out",
          }
        );
      }
      
      
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
      
      tl.to("body", { backgroundColor: "#fbffde", duration: 0.5 }, 0.3);
      tl.to("body", { backgroundColor: "#51FFD1", duration: 0.5 }, 1);


      // --- 4. Parallax Effect for Hero Image ---
      if (heroImageRef.current) {
        gsap.to(heroImageRef.current, {
          yPercent: 50, 
          ease: "none",
          scrollTrigger: {
            trigger: section1Ref.current,
            start: "top top", 
            end: "bottom top", 
            scrub: true, 
          }
        });
      }

      // --- 5. Parallax Effect for Chart Images ---
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
    <div className="min-h-screen flex flex-col overflow-x-hidden font-work">
      {/* Header / Logo Section */}
      <header className="w-full pt-12 px-4 sm:px-8 flex justify-center relative z-20">
        <div ref={logoRef} className="relative w-full max-w-[1361px] aspect-[1361/476]">
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
          <div ref={headerContentRef} className="flex flex-col gap-4 max-w-[580px] lg:mt-20 order-2 lg:order-1 lg:col-span-5">
          <h1 className="h1-responsive bg-gradient-to-b from-[#0AC200] to-[#078930] bg-clip-text text-transparent">
 
          You aren’t a customer,
          You’re a Villager.
            </h1>
            
            <p className="p-responsive text-[#5b5959] leading-snug">
            We are people. We are neighbors, friends, and the ones who love our community. Villagers helps the business you love to see you as just far more than just a customer.  </p>
            
            <div>
            <button className="border-[3px] mt-4 border-[#0ac200] rounded-full px-6 py-4 text-[#0ac200] font-semibold text-base uppercase hover:bg-[#0ac200] hover:text-[#dfffde]  transition-colors cursor-pointer bg-transparent">
              Become a villager
            </button>



            </div>
          </div>

          {/* Right Image Content */}
          <div className="relative w-full max-w-[500px] lg:max-w-none lg:w-full justify-self-end lg:justify-self-end order-1 lg:order-2 lg:col-span-7">
            <div className="aspect-[0.9] relative w-full lg:max-w-full ml-auto">
              <div ref={heroContainerRef} className="absolute inset-0 rounded-t-[550px] rounded-b-[30px] overflow-hidden ">
                <Image
                  ref={heroImageRef}
                  src="/Customer_03.png"
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
           <div ref={section2ContentRef} className="flex flex-col gap-4 max-w-[580px] order-2 lg:order-1 lg:col-span-5">
            <h1 className="h1-responsive bg-gradient-to-b from-[#0AC200] to-[#078930] bg-clip-text text-transparent">
            You can see how your dollars support your community.
            </h1>
            
            <div className="p-responsive text-[#5b5959] space-y-6 leading-snug">
              <p>
              When you shop in your Village, you’ll be shown just how much you helped your community, and not some faceless corporation hundreds of miles away. 
              </p>
            </div>
          </div>

          {/* Right Bar Chart Content */}
          <div className="relative w-full max-w-[500px] lg:max-w-none lg:w-full justify-self-end lg:justify-self-end order-1 lg:order-2 lg:col-span-7">
            <div ref={chartRef} className="aspect-[1.1] relative w-full lg:max-w-full flex items-end ml-auto justify-between">
              
              {/* Left Bar - 52% */}
              <div className="w-[48%] h-[80%] relative shrink-0">
                 <div className="absolute inset-0 rounded-t-[1000px] rounded-b-[20px] overflow-hidden">
                   {/* Background Image */}
                   <Image
                    ref={leftBarImageRef}
                    src="/Customer_04.png"
                    alt="Stays Local"
                    fill
                    className="object-cover object-center" // Removed hardcoded scale-110, handled by GSAP
                  />
                  
                  {/* Green Shape Overlay at Bottom */}
                  <div className="green-overlay absolute bottom-0 left-0 right-0 h-[50%] bg-[#3effaf] rounded-t-[1000px] z-0" />

                 {/* Content - Positioned relative to the bar */}
                 <div className="left-bar-text absolute inset-0 flex flex-col items-center justify-end pb-8 z-10">
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
                      ref={rightBarImageRef}
                      src="/Customer_05.png"
                      alt="Economic Multiplier"
                      fill
                      className="object-cover object-center" // Removed hardcoded scale-110, handled by GSAP
                    />
              
                  </div>
                
                {/* Circle Content at Bottom */}
                <div className="chart-circle absolute bottom-8 left-1/2 -translate-x-1/2 w-[85%] aspect-square bg-[#3effdc] rounded-full flex flex-col items-center justify-center p-4 z-10 text-center">
                    <div className="chart-circle-text flex flex-col items-center">
                      <span className="font-light text-[60px] md:text-[80px] lg:text-[90px] leading-none text-[#028a6f]">1.5x</span>
                      <span className="text-xs md:text-sm uppercase text-[#5b5959] font-medium mt-2 leading-tight">
                        Economic <br/> Multiplier
                      </span>
                    </div>
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
        <section ref={pricingRef} className="w-full md:px-8 mb-20">
        <div className="bg-white w-full flex flex-col gap-12 items-center justify-center pt-32 px-6 pb-16 md:px-16 relative rounded-b-[40px]  rounded-t-[800px] ">
              
              {/* Header Text */}
              <div className="flex flex-col gap-8 items-center justify-center text-center w-full max-w-4xl">
                <p className="font-regular text-3xl md:text-5xl leading-tight  bg-gradient-to-b from-[#0AC200] to-[#078930] bg-clip-text text-transparent">
                  Join the Movement. <br />
                  Build Your Village.
                </p>
                <p className="text-[#5c3e34] text-sm md:text-base leading-relaxed max-w-xl">
                  Sign up for the Villagers newsletter to stay in the know about what’s happening locally, new shops, events, and the people who keep our community thriving.
                </p>
              </div>

              {/* Form Fields */}
              <div className="flex flex-col gap-4 items-end w-full max-w-4xl">
                <input 
                  type="text" 
                  placeholder="First Name*" 
                  className="w-full bg-[#dfffde] rounded-full px-8 py-4 text-[#5c3e34] placeholder-[#5c3e34] text-sm md:text-base border-none outline-none focus:ring-2 focus:ring-[#03879e]/20"
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="w-full bg-[#dfffde] rounded-full px-8 py-4 text-[#5c3e34] placeholder-[#5c3e34] text-sm md:text-base border-none outline-none focus:ring-2 focus:ring-[#03879e]/20"
                />
                <input 
                  type="tel" 
                  placeholder="Mobile Phone" 
                  className="w-full bg-[#dfffde] rounded-full px-8 py-4 text-[#5c3e34] placeholder-[#5c3e34] text-sm md:text-base border-none outline-none focus:ring-2 focus:ring-[#03879e]/20"
                />
                <input 
                  type="email" 
                  placeholder="Email*" 
                  className="w-full bg-[#dfffde] rounded-full px-8 py-4 text-[#5c3e34] placeholder-[#5c3e34] text-sm md:text-base border-none outline-none focus:ring-2 focus:ring-[#03879e]/20"
                />
                
                <div className="h-4" />
                
                <button className="border-[3px] mt-4 border-[#0ac200] rounded-full px-6 py-4 text-[#0ac200] font-semibold text-base uppercase hover:bg-[#0ac200] hover:text-white transition-colors cursor-pointer bg-transparent">
              Become a villager
            </button>
              </div>
           </div>
        </section>  
        
    
            </div>    
            
            <Footer />
    </div>
  );
}

