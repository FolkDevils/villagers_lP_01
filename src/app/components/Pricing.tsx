"use client";

import React from "react";

const CheckIcon = () => (
  <svg
    width="21"
    height="13"
    viewBox="0 0 21 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
  >
    <path
      d="M2 6.5L7.5 11L19 2"
      stroke="#00D29E"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PRICING_TIERS = [
  {
    name: "Start Building",
    price: "29",
    period: "/mo",
    description: (
      <>
        Recommended for all locally <br /> owned businesses
      </>
    ),
    features: [
      "Customers receive a Local Impact Receipt with every purchase",
      "AI-driven business insights (3 per weekly summary)",
      "Cross promote fellow Villagers local businesses",
    ],
  },
  {
    name: "Relationship Builder",
    price: "199",
    period: "/mo",
    description: (
      <>
        Recommended for merchants <br /> with annual revenue $500k-$1M
      </>
    ),
    features: [
      "Customers receive a Local Impact Receipt with every purchase",
      "Cross promote fellow Villagers local businesses",
      "Enhanced AI-driven business insights Dashboard",
      "Customer Profiles (CRM)",
      "Enriched Customer Data (top 100)",
      "AI driven \"next best actions\" and personalized AI pre-drafted emails (3 / day)",
    ],
  },
  {
    name: "Community Builder",
    price: "349",
    period: "/mo",
    description: "Recommended for merchants who have (or want to have) annual revenue above $1M",
    features: [
      "Customers receive a Local Impact Receipt with every purchase",
      "Cross promote fellow Villagers local businesses",
      "Enhanced AI-driven business insights Dashboard",
      "Customer Profiles (CRM)",
      "Enriched Customer Data (Top 35%)",
      "AI driven \"next best actions\" and personalized AI pre-drafted emails (unlimited)",
      "Group emails (unlimited)",
      "Integrated SMS (unlimited)",
      "Integrated event and appointment scheduling (unlimited)",
      "Enhanced cross-promotional collaboration (unlimited)",
    ],
  },
];

export default function Pricing() {
  return (
    <div className="w-full flex flex-col items-center gap-12 pt-20 pb-8">
      <h1 className="font-work font-regular text-[#03879e] text-[32px] md:text-[40px] text-center px-4">
        Join the Movement. Build Your Village.
      </h1>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 px-4 lg:px-0 max-w-[1440px] mx-auto">
        {PRICING_TIERS.map((tier, index) => (
          <div
            key={index}
            className="bg-white pt-24 pb-16 px-6 sm:px-12 rounded-t-[500px] rounded-b-[32px] flex flex-col items-center h-full "
          >
            {/* Header */}
            <div className="flex flex-col items-center gap-6 mb-8 w-full">
              <div className="flex flex-col items-center gap-5">
                <span className="font-work font-medium text-[#03879e] text-sm uppercase text-center tracking-wide">
                  {tier.name}
                </span>
                
                <div className="flex flex-col items-center text-[#03879e]">
                  <span className="font-work font-light text-[80px] leading-none">
                    ${tier.price}
                  </span>
                  <span className="font-work font-medium text-lg">
                    {tier.period}
                  </span>
                </div>

                <p className="font-work font-semibold text-[#5b5959] text-sm text-center min-h-[48px]">
                  {tier.description}
                </p>
              </div>

              <button className="w-full py-4 px-6 border-[3px] border-[#00d29e] rounded-full text-[#00d29e] font-work font-semibold text-base uppercase hover:bg-[#00d29e] hover:text-white transition-colors">
                Sign up
              </button>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-4 w-full">
              {tier.features.map((feature, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="mt-1">
                    <CheckIcon />
                  </div>
                  <p className="font-work font-medium text-[#5b5959] text-sm leading-tight">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

