"use client";

import { useRef, useState } from "react";
import UniversalCarousel from "../components/features/UniversalCarousel";
import Pricing from "../components/features/Pricing";
import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";
import CircularChart from "../components/charts/CircularChart";
import HeroSection from "../components/layout/HeroSection";
import FormPopup from "../components/features/FormPopup";
import StickyBottomCTA from "../components/layout/StickyBottomCTA";
import NewsletterSignup from "../components/features/NewsletterSignup";
import { useScrollAnimations } from "../../hooks/useScrollAnimations";
import { OWNER_SLIDES, OWNER_QUOTE_SLIDES } from "../data/slides";

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

  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);
  const pricingRef = useRef<HTMLElement>(null);
  
  // Hook only handles global page animations (background color)
  // Component-specific animations are now encapsulated within CircularChart
  useScrollAnimations();

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden font-poppins">
      <NavBar />

      <HeroSection
        backgroundImage="/ownerHero02a.png"
        mobileBackgroundImage="/heroOwner_mobile.png"
        title={<>They're not customers.<br />They're Villagers.</>}
        description="Villagers helps local businesses like yours focus on the 35% of the people in your immediate area who drive 80% of your revenue — turning everyday purchases into lasting relationships and measurable growth."
        buttonText="Become a villager"
        onButtonClick={() => openPopup('default')}
      />

      <main className="flex-1 w-full max-w-[1600px] mx-auto relative z-10">
        <section ref={section1Ref} className="w-full px-8 md:px-28 pt-20 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="flex flex-col gap-4 max-w-[580px] order-2 lg:order-1 lg:col-span-5">
              <h1 className="h1-responsive text-[#332E2E]">
                Every purchase they make tells a story of community Impact.
              </h1>
              <div className="p-responsive text-[#333333] space-y-6 leading-snug">
                <p>When a customer see how much of each purchase stays local, supports jobs, and strengthens public services, they come back, not just to shop, but to belong.</p>
              </div>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-7 flex justify-center items-center">
              <div className="w-full max-w-[500px] md:max-w-[600px] aspect-square mx-auto">
                {/* CircularChart now handles its own animations */}
                <CircularChart padding="p-0" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <section ref={section2Ref} className="w-full py-16">
        <UniversalCarousel slides={OWNER_SLIDES} />
      </section>  
      <section className="w-full py-16">
        <UniversalCarousel slides={OWNER_QUOTE_SLIDES} />
      </section>

      <div className="w-full max-w-[1600px] mx-auto px-8 md:px-28 space-y-32 pb-20">
        <section id="pricing-section" ref={pricingRef} className="w-full">
          <Pricing onLearnMoreClick={() => openPopup('pricing')} />
        </section>

        <section id="newsletter-signup" className="w-full">
          <NewsletterSignup />
        </section>
      </div>

      <Footer />

      <StickyBottomCTA 
        onButtonClick={() => openPopup('default')}
        hideBeforeElementId="pricing-section"
      />

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
