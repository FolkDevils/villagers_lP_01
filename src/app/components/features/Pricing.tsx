"use client";

import React from "react";
import Button from "../ui/Button";
import { PRICING_TIERS, PricingTier } from "../../data/pricing";

interface PricingProps {
  onLearnMoreClick?: () => void;
}

const CheckIcon = () => (
  <svg
    width="21"
    height="13"
    viewBox="0 0 21 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0"
    aria-hidden="true"
  >
    <path
      d="M2 6.5L7.5 11L19 2"
      stroke="#332e2e"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Pricing({ onLearnMoreClick }: PricingProps) {
  return (
    <div className="w-full flex flex-col items-center gap-8 pt-8 pb-4">
      <h1 className="font-playfair font-bold text-[#332e2e] text-[32px] md:text-[40px] text-center px-4">
        Three Ways To Build Your Village.
      </h1>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 px-0 lg:px-0  mx-auto">
        {PRICING_TIERS.map((tier: PricingTier, index: number) => (
          <div
            key={index}
            className="bg-[#fdf0da] pt-24 pb-16 px-6 sm:px-12 rounded-[32px] flex flex-col items-center h-full "
          >
            {/* Header */}
            <div className="flex flex-col items-center gap-6 mb-8 w-full">
              <div className="flex flex-col items-center gap-1">
                <span className="font-poppins font-medium text-[#332e2e] p-responsive uppercase text-center tracking-wide">
                  {tier.name}
                </span>
                
                <div className="flex flex-col items-center text-[#332e2e]">
                  <span className="font-playfair font-semibold text-[64px] mb-3 leading-none">
                    ${tier.price}
                  </span>
                  <span className="font-poppins font-medium p-responsive">
                    {tier.period}
                  </span>
                </div>

                <div className="font-poppins font-medium text-[#332e2e] mt-2 p-responsive text-center min-h-[48px]">
                  {tier.description}
                </div>
              </div>

              <Button
                onClick={onLearnMoreClick}
                variant={index === 0 ? "primary" : "outline"}
                size="medium"
                className={`w-full mt-0 ${
                  index === 0
                    ? "bg-[#FF4930] text-white hover:bg-[#E63946] hover:text-white border-[#FF4930] hover:border-[#E63946]"
                    : "bg-[#332e2e] text-[#FF4930] hover:bg-[#2a2525] hover:text-[#FF4930] border-[#332e2e] hover:border-[#2a2525]"
                }`}
              >
                {tier.buttonText || "Learn More"}
              </Button>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-4 w-full">
              {tier.features.map((feature, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="mt-1">
                    <CheckIcon />
                  </div>
                  <p className="font-poppins font-medium text-[#332e2e] p-responsive leading-tight">
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
