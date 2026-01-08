import React from 'react';

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: React.ReactNode;
  features: string[];
}

export const PRICING_TIERS: PricingTier[] = [
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
    description: (
      <>
        Recommended for merchants who have <br /> (or want to have) annual revenue above $1M
      </>
    ),
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

