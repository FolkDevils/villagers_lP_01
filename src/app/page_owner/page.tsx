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
import FAQ from "../components/features/FAQ";
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
        title={<>Local Merchants Are the Cornerstone of Our Communities.</>}
        description={
          <>
            You have what giants don&apos;t: passion, expertise, and the ability to create IRL relationships customers crave.
            <br/>
            <br/>
            <strong>So why are you stuck with tools built for transactions?</strong>  <br/>
            The battle isn&apos;t online vs. local. It&apos;s transactional vs. relational.
            <br/>  <br/>
            Villagers gives you relationship tools—built to turn your IRL superpower into unstoppable loyalty. No spreadsheets. No overwhelm. No juggling five apps that don&apos;t talk to each other.
            <br/>  <br/>
            <strong>Integrates in with all major POS systems. Setup in minutes.</strong>
          </>
        }
        buttonText="Become a villager"
        onButtonClick={() => openPopup('default')}
      />

      <main className="flex-1 w-full max-w-[1600px] mx-auto relative z-10">
        <section ref={section1Ref} className="w-full px-8 md:px-28 pt-20 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="flex flex-col gap-4 max-w-[580px] order-2 lg:order-1 lg:col-span-5">
              <h1 className="h1-responsive text-[#332E2E]">
              Do you know how important you are to your community?
              </h1>
              <div className="p-responsive text-[#333333] space-y-6 leading-snug">
                <p>
                  <b>52%</b> of every dollar stays local (vs. 6% online)
                  <br/>  <br/>
                  <b>3x multiplier</b> on every dollar spent locally
                  <br/>  <br/>
                  <b>$100M net impact and 1,200 new jobs</b> created per city* if only 3% of online and chain purchases moved to a locally owned store
                  <br/>  <br/>
                  *city of 350k
                </p>
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

      <section className="w-full pt-32  pb-24 w-full max-w-[1600px] mx-auto px-8 md:px-28 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="flex flex-col gap-4 order-2 lg:order-2 lg:col-span-6">
            <h1 className="h1-responsive text-[#332E2E]">
            You have the IRL Superpower that matters. You just needed the tools built for you. 

            </h1>
            <div className="p-responsive text-[#332E2E] space-y-6 leading-snug">
              <p>For 20 years, e-commerce and chains have had the tools. The data. The automation. The AI. 
              </p>
              <p>Now local does too. </p>

<p>The giants aren’t going anywhere. But neither are you.
</p>
          
            </div>
          </div>

          <div className="order-1 lg:order-1 lg:col-span-6 flex justify-center items-center">
            <div className="w-full aspect-5/4  mx-auto rounded-t-[32px] rounded-b-[32px] overflow-hidden">
              <Image
                src="/block02_image_07.png"
                alt="Store Badge"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="w-full max-w-[1600px] mx-auto px-8 md:px-28 space-y-32 pb-20">
        <section id="pricing-section" ref={pricingRef} className="w-full">
          <Pricing onLearnMoreClick={() => openPopup('pricing')} />
        </section>





        <section className="w-full py-20">
          <div className="flex flex-col items-center gap-12">
          
            <FAQ />
          </div>
        </section>

        <section className="w-full pb-32">
          <div className="flex flex-col items-center gap-8">
        

            <div className="flex flex-col gap-4 text-center text-[#332E2E] max-w-[900px] mx-auto">
              <h1 className="h1-responsive text-[#332E2E]" >
              You Have the Superpower. You Just Needed the Infrastructure.
              </h1>

                <p className="text-center max-w-[700px] text-[#332E2E] mx-auto">
                  For 20 years, e-commerce has had the tools. The data. The automation. The AI.
                  <br/> <br/> Now local does too. <br/> <br/>
The giants aren't going anywhere. But neither are you.
         </p>

                <div className="mt-8">
                  <button
                    onClick={() => openPopup('default')}
                    className="bg-[#FF4930] text-white hover:bg-[#E63946] hover:text-white border-2 border-[#FF4930] hover:border-[#E63946] px-12 py-5 text-xl font-semibold uppercase rounded-lg transition-all duration-300 cursor-pointer"
                  >
                    Become a Villager
                  </button>
                </div>

            </div>
          </div>
        </section>
        <section className="w-full pb-32">
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

            <div className="flex flex-col gap-4 text-center text-[#332E2E] max-w-[900px] mx-auto">
              <h1 className="h1-responsive text-[#332E2E]" >
              Born in a Durham boutique. Fellow merchant-tested.<br/>
Rebuilding the Village™
  </h1>

                <p className="text-center max-w-[700px] text-[#332E2E] mx-auto"> 
                When customers see this badge in your window, they know you're part of the Village—locally-owned and investing in community.
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
