"use client";

import { useRef, useState } from "react";
import UniversalCarousel from "../components/features/UniversalCarousel";
import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";
import HeroSection from "../components/layout/HeroSection";
import ContentBlock from "../components/ui/ContentBlock";
import BarChart from "../components/charts/BarChart";
import StickyBottomCTA from "../components/layout/StickyBottomCTA";
import FormPopup from "../components/features/FormPopup";
import { useChartAnimations } from "../../hooks/useChartAnimations";
import { CUSTOMER_SLIDES, CUSTOMER_QUOTE_SLIDES } from "../data/slides";

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  
  // Ref for the text content block that we still animate via the page hook
  const section2ContentRef = useRef<HTMLDivElement>(null);

  // Use the extracted chart animation hook (now simplified)
  // It only handles text fade-ins and background color
  useChartAnimations({
    section2ContentRef,
  });

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
            // BarChart now handles its own internal animations
            <BarChart
            leftBarImage="/local.png"
            leftBarPercentage="52%"
            leftBarLabel="Stays Local"
            leftBarDetails={["Of every dollar spent", "(vs. 6% online)"]}
            rightBarImage="/Customer_05.png"
            rightBarValue="1.5x"
            rightBarLabel="Economic Multiplier"
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

      <Footer onContactClick={openPopup} />

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
