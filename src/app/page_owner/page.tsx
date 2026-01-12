"use client";

import { useRef, useState } from "react";
import Image from "next/image";
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
        title={<>Real experiences and real relationships.</>}
        description="
Local Merchants have a superpower giant stores don&apos;t. Authentic experiences, personal connections, and real human moments. They are the cornerstone of the community. You just need tools built to enhance that. "
        buttonText="Become a villager"
        onButtonClick={() => openPopup('default')}
      />

      <main className="flex-1 w-full max-w-[1600px] mx-auto relative z-10">
        <section ref={section1Ref} className="w-full px-8 md:px-28 pt-20 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="flex flex-col gap-4 max-w-[580px] order-2 lg:order-1 lg:col-span-5">
              <h1 className="h1-responsive text-[#332E2E]">
              Villagers enables you to turn IRL relationships into lasting loyalty
              </h1>
              <div className="p-responsive text-[#333333] space-y-6 leading-snug">
                <p> without the overwhelming complexity, the spreadsheets, or managing multiple apps. It’s never been a better time to be a local merchant. </p>
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


      <div className="w-full max-w-[1600px] mx-auto px-8 md:px-28 space-y-32 pb-20">
        <section id="pricing-section" ref={pricingRef} className="w-full">
          <Pricing onLearnMoreClick={() => openPopup('pricing')} />
        </section>

        <section id="newsletter-signup" className="w-full">
          <NewsletterSignup />
        </section>

        <section ref={section1Ref} className="w-full pb-32">
          <div className="flex flex-col items-center gap-8">
            <div className="flex justify-center items-center">
              <div className="w-64 h-64 mx-auto">
                <Image
                  src="/trustBadge.svg"
                  alt="Trust Badge"
                  width={200}
                  height={200}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 text-center max-w-[900px] mx-auto">
              <h1 className="h1-responsive text-[#332E2E]" >
              Durham-born by a local boutique owner.<br />Fellow merchant-tested. Rebuilding the Village™
              </h1>

                <p className="text-center max-w-[700px] mx-auto"> When your customers see this badge in your window, they know you're certified locally-owned, invested in community, and part of the movement.
                </p>
        
            </div>
          </div>
        </section>
      </div>

      <Footer onContactClick={() => openPopup('default')} />

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
