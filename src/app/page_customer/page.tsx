"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import UniversalCarousel from "../components/features/UniversalCarousel";

import Refferal from "../components/features/Refferal";
import Footer from "../components/layout/Footer";
import NavBar from "../components/layout/NavBar";
import HeroSection from "../components/layout/HeroSection";
import BarChart from "../components/charts/BarChart";
import Button from "../components/ui/Button";
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
        title={<>Find Your Village</>}
        description="The real world is happening all around you—at your local coffee shop, bookstore, and corner cafe. These aren't just stores—they're where deep product knowledge, passion, and friendly faces come together. It's where your community gathers."
        buttonText="Join the Village"
        onButtonClick={openPopup}
      />

      <main className="flex-1 w-full max-w-[1600px] mx-auto px-8 md:px-28 relative z-10">
        <section ref={section1Ref} className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-20  lg:gap-20 items-center">
          {/* Left Text Content */}
          <div className="flex flex-col gap-4 max-w-[580px] order-2 lg:order-1 lg:col-span-6">
            <h1 className="h1-responsive text-[#332E2E]">
              Turn Soulless Transactions into Real Experiences
            </h1>

            <div className="p-responsive text-[#332E2E] space-y-6 leading-snug">
              <p>Your local merchants offer something algorithms never can: the retail owner who knows exactly what you'll love, the barista who remembers your order, the chef who gets excited explaining tonight's special.</p>
              <p>These are your people. This is your village. When you shop local, you're choosing real conversations over chatbots, discovering hidden gems over sponsored results, and building relationships with neighbors who know your name.</p>
              <p>The best part: Those meaningful experiences also create massive economic impact in your community.</p>
            </div>
          </div>

          {/* Right Component */}
          <div className="relative w-full max-w-[600px] lg:max-w-none lg:w-full justify-self-center order-1 lg:order-2 lg:col-span-6 flex items-center justify-center">
            {/* BarChart now handles its own internal animations */}
            <BarChart
              leftBarImage="/local.png"
              leftBarPercentage="52%"
              leftBarLabel="Stays Local"
              leftBarDetails={["Of every dollar spent", "(vs. 6% online)"]}
              rightBarImage="/Customer_05.png"
              rightBarValue="1.5x"
              rightBarLabel="Economic Multiplier"
            />
          </div>
        </section>
      </main>

      <section ref={section2Ref} className="w-full pt-16">
        <UniversalCarousel slides={CUSTOMER_SLIDES} />
      </section>
 
      <section className="w-full pt-32  pb-24 w-full max-w-[1600px] mx-auto px-8 md:px-28 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="flex flex-col gap-4 order-2 lg:order-1 lg:col-span-5">
            <h1 className="h1-responsive text-[#332E2E]">
              Look For the Villagers Badge
            </h1>
            <div className="p-responsive text-[#332E2E] space-y-6 leading-snug">
              <p>When you see this badge, you know that business is:</p>
              <ul className="space-y-2">
                <li>✓ Locally-owned (not a chain or franchise)</li>
                <li>✓ Investing in your community (they live and give here)</li>
                <li>✓ What keeps your community unique (the funky, authentic places you love)</li>
              </ul>
              <p>These are the businesses worth protecting.</p>
          
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-7 flex justify-center items-center">
            <div className="w-full aspect-3/2  mx-auto rounded-t-[32px] rounded-b-[32px] overflow-hidden">
              <Image
                src="/StoreBadge_02.png"
                alt="Store Badge"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full pt-0 pb-24 md:pt-8 md:pb-32 w-full max-w-[1600px] mx-auto px-8 md:px-28 relative">
  
          <Refferal />
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
