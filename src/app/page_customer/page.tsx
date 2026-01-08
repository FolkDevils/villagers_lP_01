"use client";

import UniversalCarousel, { CarouselSlide } from "../components/UniversalCarousel";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import ContentBlock from "../components/ContentBlock";
import BarChart from "../components/BarChart";
import StickyBottomCTA from "../components/StickyBottomCTA";
import FormPopup from "../components/FormPopup";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Carousel 1: Customer features with chart
const CUSTOMER_SLIDES: CarouselSlide[] = [
  {
    id: "chart",
    type: "chart",
    title: "It's your Village.<br /> Be a part of it.",
    description: (
      <>
        <p className="mb-6">
          you'll get to know the shops and stores you love — and they'll get to know you and what you love.
        </p>
        <p>
          Villagers makes you the top priority of their business. you're as valued as you should be.
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
    imageSrc: "/Customer_07.png",
    imageAlt: "Community Impact",
    title: "So much more than shopping.",
    description: (
      <>
        <p className="mb-4">
          There's a reason you return to your favorite stores. Maybe you love the owner. Maybe you love the service or the products.
          Villagers knows there is nothing more valuable than maintaining a supportive and thriving place for you to go.
        </p>
        <p className="font-bold">
          Your Local Impact Receipt builds real loyalty and connection between you and the places you love.
        </p>
      </>
    ),
  },
  {
    id: "engage",
    type: "image",
    imageSrc: "/Customer_10.png",
    imageAlt: "Thrive Together",
    title: "They thrive, you win.",
    description: (
      <>
        <p className="mb-6">Villagers AI system does so much for shop Owners.</p>
        <p className="mb-6">Email, SMS, events, and AI insights — all in one place. These tools allow them to keep in touch with you the very best way, personally and authentically.</p>
      </>
    ),
  },
  {
    id: "value",
    type: "image",
    imageSrc: "/Customer_11.png",
    imageAlt: "Belong",
    title: "Be a part of it all.",
    description: (
      <>
        <p className="mb-6">Nothing feels better than a spirit of belonging.</p>
        <p>
          Villagers brings communities together. Our shared goal is for the neighborhood you love and live in to thrive and prosper. Together.
        </p>
      </>
    ),
  },
];

// Carousel 2: Customer quotes
const CUSTOMER_QUOTE_SLIDES: CarouselSlide[] = [
  {
    id: "quote-1",
    type: "quote",
    quote: "\u201CVillagers makes sure I\u2019m seen as a real person, not a number\u201D",
    imageSrc: "/Customer_12.png",
    imageAlt: "Customer testimonial",
  },
  {
    id: "quote-2",
    type: "quote",
    quote: "\u201CI shop local because it feels personal. Villagers makes everyday errands feel meaningful.\u201D",
    imageSrc: "/Customer_13.png",
    imageAlt: "Customer testimonial",
  },
  {
    id: "quote-3",
    type: "quote",
    quote: "\u201CBeing a Villager means belonging. Every shop here feels like part of our circle.\u201D",
    imageSrc: "/Customer_14.png",
    imageAlt: "Customer testimonial",
  },
  {
    id: "quote-4",
    type: "quote",
    quote: "\u201CVillagers helps us raise our family in a real community. These stores truly know us.\u201D",
    imageSrc: "/Customer_15.png",
    imageAlt: "Customer testimonial",
  },
];

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const section2ContentRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const leftBarImageRef = useRef<HTMLImageElement>(null);
  const rightBarImageRef = useRef<HTMLImageElement>(null);
  const headerContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set("body", { backgroundColor: "#FCFBF5" });

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
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

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
        const leftBarText = chartRef.current.querySelector(".left-bar-text");

        if (greenOverlay) {
           gsap.fromTo(greenOverlay,
            { height: "0%" },
            {
              height: "50%",
              duration: 1.5,
              ease: "power2.out",
              delay: 0.5,
              scrollTrigger: {
                trigger: chartRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }

        if (leftBarText) {
          gsap.fromTo(leftBarText,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
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

      if (leftBarImageRef.current) {
        gsap.set(leftBarImageRef.current, { scale: 1.3, yPercent: -10 });
        
        gsap.to(leftBarImageRef.current, {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: chartRef.current,
            start: "top bottom", 
            end: "bottom top",   
            scrub: true
          }
        });
      }

      if (rightBarImageRef.current) {
         gsap.set(rightBarImageRef.current, { scale: 1.3, yPercent: -10 });

         gsap.to(rightBarImageRef.current, {
          yPercent: 30,
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
    <div className="min-h-screen flex flex-col overflow-x-hidden font-poppins">
      <NavBar />

      <HeroSection
        backgroundImage="/customerHero08.png"
        mobileBackgroundImage="/heroCustomer_mobile.png"
        title={<>You aren't a customer,<br />You're a Villager.</>}
        description="We are people. We are neighbors, friends, and the ones who love our community. Villagers helps the business you love to see you as just far more than just a customer."
        buttonText="Join the Village"
        onButtonClick={openPopup}
      />

      <main className="flex-1 w-full max-w-[1600px] mx-auto px-8 md:px-28 pb-20 relative z-10">
        <ContentBlock
          sectionRef={section1Ref}
          title="You can see how your dollars support your community."
          description="When you shop in your Village, you'll be shown just how much you helped your community, and not some faceless corporation hundreds of miles away."
          rightComponent={
            <BarChart
            leftBarImage="/local.png"
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
      </main>

      <section ref={section2Ref} className="w-full py-16">
        <UniversalCarousel slides={CUSTOMER_SLIDES} />
      </section>
      
      <section className="w-full py-16 pb-32">
        <UniversalCarousel slides={CUSTOMER_QUOTE_SLIDES} />
      </section>

      <Footer />

      <StickyBottomCTA 
        onButtonClick={openPopup}
      />

      <FormPopup 
        isOpen={isPopupOpen}
        onClose={closePopup}
        title={
          <>
            Join the Village.<br />
            Be a part of it.
          </>
        }
        description="Sign up to stay connected with the local shops and businesses you love. Get updates on events, special offers, and community news."
        buttonText="Join Now"
      />
    </div>
  );
}

