"use client";

import Image from "next/image";
import UniversalCarousel, { CarouselSlide } from "../components/UniversalCarousel";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CircularChart from "../components/CircularChart";
import HeroSection from "../components/HeroSection";
import ContentBlock from "../components/ContentBlock";
import FormPopup from "../components/FormPopup";
import StickyBottomCTA from "../components/StickyBottomCTA";
import NewsletterSignup from "../components/NewsletterSignup";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Carousel 1: Owner features with chart
const OWNER_SLIDES: CarouselSlide[] = [
  {
    id: "chart",
    type: "chart",
    title: "Know Your Village",
    description: (
      <>
        <p className="mb-6">
          Get to know the people who really matter— the 35% who drive 80% of your revenue.  </p> <p className="mb-6">
          Villagers automatically brings your top customers to the forefront and helps you to keep them coming back, so you can focus where it matters most.
        </p>
      </>
    ),
    chartConfig: {
      largePercentage: "85%",
      largeLabel: "Total Sales",
      smallPercentage: "35%",
      smallLabel: "customers",
    },
  },
  {
    id: "impact",
    type: "image",
    imageSrc: "/block02_image_05.png",
    imageAlt: "Local Impact",
    title: "What impacts one, impacts us all",
    description: (
      <>
        <p className="mb-4">
        Each purchase triggers a Local Impact Receipt showing how dollars stay local and support the community. Customers see their impact, and you automatically collect verified emails.
        </p>
        <p className="font-bold">
          The Local Impact Receipt builds loyalty by illustrating purpose and connection
        </p>
      </>
    ),
  },
  {
    id: "engage",
    type: "image",
    imageSrc: "/block02_image_06.png",
    imageAlt: "Engage & Grow",
    title: "Engage & Grow",
    description: (
      <>
        <p className="mb-6">Email, SMS, events, and AI insights — all in one place.
          Your AI assistant, Alder, enriches customer profiles, drafts messages, and identifies your next best actions automatically.
  So you can be on the floor, talking to the people that matter.</p>
      </>
    ),
  },
  {
    id: "value",
    type: "image",
    imageSrc: "/block02_image_07.png",
    imageAlt: "Create Value",
    title: "Create Lasting Value",
    description: (
      <>
        <p className="mb-6">
          Villagers is all about helping you retain your best customers, elevate your regulars, and turn data into true connection points.
        Nothing grows your dream like real people and real contact. Villagers is here to support that.</p>
      </>
    ),
  },
];

// Carousel 2: Owner quotes with logos
const OWNER_QUOTE_SLIDES: CarouselSlide[] = [
  {
    id: "quote-1",
    type: "quote-with-logo",
    quote: "\u201CVillagers helped us connect with the customers who make our shop thrive.\u201D",
    logoSrc: "/logo_yonderlust.svg",
    logoAlt: "Yonderlust",
    imageSrc: "/quote_01b.png",
    imageAlt: "Customer testimonial",
    logoWidth: 180,
    logoHeight: 50,
  },
  {
    id: "quote-2",
    type: "quote-with-logo",
    quote: "\u201CVillagers changed my business in ways I could not have thought possible.\u201D",
    logoSrc: "/logo_indio.svg",
    logoAlt: "Indio",
    imageSrc: "/quote_02.png",
    imageAlt: "Customer testimonial",
    logoWidth: 110,
    logoHeight: 50,
  },
  {
    id: "quote-3",
    type: "quote-with-logo",
    quote: "\u201CI was able to connect with my customers like never before \u201D",
    logoSrc: "/logo_ascend.svg",
    logoAlt: "Ascend",
    imageSrc: "/quote_03.png",
    imageAlt: "Customer testimonial",
    logoWidth: 150,
    logoHeight: 50,
  },
  {
    id: "quote-4",
    type: "quote-with-logo",
    quote: "\u201CVillagers made connecting with my customers online so easy.\u201D",
    logoSrc: "/logo_bullseye.svg",
    logoAlt: "Bullseye",
    imageSrc: "/quote_05.png",
    imageAlt: "Customer testimonial",
    logoWidth: 100,
    logoHeight: 110,
  },
];

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState<{
    title: React.ReactNode;
    description: React.ReactNode;
    buttonText: string;
  }>({
    title: (
      <>
        Join the Movement. <br />
        Build Your Village.
      </>
    ),
    description: "Sign up for the Villagers newsletter to stay in the know about what's happening locally, new shops, events, and the people who keep our community thriving.",
    buttonText: "Sign Up Now"
  });

  const openPopup = (type: 'default' | 'pricing' = 'default') => {
    if (type === 'pricing') {
      setPopupContent({
        title: (
          <>
            Let&apos;s Build Your <br />
            Village Together
          </>
        ),
        description: "Every community is unique, and so is every business. Tell us a bit about yourself, and let's have a conversation about how Villagers can help you grow deeper connections and lasting relationships with the people who matter most.",
        buttonText: "Start the Conversation"
      });
    } else {
      setPopupContent({
        title: (
          <>
            Join the Movement. <br />
            Build Your Village.
          </>
        ),
        description: "Sign up for the Villagers newsletter to stay in the know about what's happening locally, new shops, events, and the people who keep our community thriving.",
        buttonText: "Sign Up Now"
      });
    }
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
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

      {/* Hero Section - extends under nav */}
      <HeroSection
        backgroundImage="/ownerHero02a.png"
        mobileBackgroundImage="/heroOwner_mobile.png"
        title={<>They're not customers.<br />They're Villagers.</>}
        description="Villagers helps local businesses like yours focus on the 35% of the people in your immediate area who drive 80% of your revenue — turning everyday purchases into lasting relationships and measurable growth."
        buttonText="Become a villager"
        onButtonClick={() => openPopup('default')}
      />

      {/* Main Content - Circular Chart Section */}
      <main className="flex-1 w-full max-w-[1600px] mx-auto relative z-10">
        {/* ========================================
            CIRCULAR CHART SECTION - FULL CONTROL
            ========================================
            EASY SIZE CONTROLS:
            - Mobile: Change max-w-[500px] to your desired mobile size
            - Desktop: Change md:max-w-[600px] to your desired desktop size
            - Always centered and responsive
        ======================================== */}
        <section ref={section1Ref} className="w-full px-8 md:px-28 pt-20 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left: Text Content */}
            <div className="flex flex-col gap-4 max-w-[580px] order-2 lg:order-1 lg:col-span-5">
              <h1 className="h1-responsive text-[#332E2E]">
                Every purchase they make tells a story of community Impact.
              </h1>
              <div className="p-responsive text-[#333333] space-y-6 leading-snug">
                <p>When a customer see how much of each purchase stays local, supports jobs, and strengthens public services, they come back, not just to shop, but to belong.</p>
              </div>
            </div>

            {/* Right: Chart with Full Size Control */}
            <div className="order-1 lg:order-2 lg:col-span-7 flex justify-center items-center">
              {/* 
                CHART SIZE CONTROL - EDIT THESE VALUES:
                Mobile: max-w-[500px] (default 500px - increase for bigger)
                Desktop: md:max-w-[600px] (default 600px - increase for bigger)
              */}
              <div className="w-full max-w-[500px] md:max-w-[600px] aspect-square">
                <CircularChart 
                  padding="p-0"
                  chartRef={circularChartRef}
                  outerRingRef={outerRingRef}
                  innerRingRef={innerRingRef}
                  outerBgRef={outerBgRef}
                  innerBgRef={innerBgRef}
                  contentRef={chartContentRef}
                />
              </div>
            </div>
            
          </div>
        </section>
      </main>

      {/* Carousel Sections - Full Viewport Width */}
      <section ref={section2Ref} className="w-full py-16">
        <UniversalCarousel slides={OWNER_SLIDES} />
      </section>  
      <section className="w-full py-16">
        <UniversalCarousel slides={OWNER_QUOTE_SLIDES} />
      </section>

      {/* Bottom Content Sections */}
      <div className="w-full max-w-[1600px] mx-auto px-8 md:px-28 space-y-32 pb-20">
        {/* Pricing Section */}
        <section id="pricing-section" ref={pricingRef} className="w-full">
          <Pricing onLearnMoreClick={() => openPopup('pricing')} />
        </section>

        {/* Newsletter Signup Section */}
        <section id="newsletter-signup" className="w-full">
          <NewsletterSignup />
        </section>
      </div>

      <Footer />

      {/* Sticky Bottom CTA */}
      <StickyBottomCTA 
        onButtonClick={() => openPopup('default')}
        hideBeforeElementId="pricing-section"
      />

      {/* Form Popup */}
      <FormPopup 
        isOpen={isPopupOpen}
        onClose={closePopup}
        title={popupContent.title}
        description={popupContent.description}
        buttonText={popupContent.buttonText}
      />
    </div>
  );
}

