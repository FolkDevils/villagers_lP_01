import React from 'react';

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: React.ReactNode;
  features: string[];
  buttonText?: string;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Get Credit for Being Local ",
    price: "29",
    period: "/mo",
    buttonText: "Get started",
    description: (
      <>
       Turn "Support Local" desires into repeat customers.
      </>
    ),
    features: [
      "Every customer receives their monthly Community Impact Statement that shows them their real economic impact to your community",
      "They see which local businesses they're supporting (including you!)",
      "They track their 'local sustainer' status: Supporter → Champion → Hero",
      "You get featured in cross-promotion to other merchants' customers",
      "Weekly AI insights about your top customers",
    ],
  },
  {
    name: "Know Your Real Customers",
    price: "179",
    period: "/mo",
    buttonText: "Beta - Join the waitlist",
    description: (
      <>
        Build Relationships With The 35% Who Matter Most
      </>
    ),
    features: [
      "Everything in Tier 1",
      "Automatic segmentation of your customers: See the 35% driving 80% of revenue",
      "Rich CRM of all your customers and AI-enriched profiles for your VIPs",
      "AI pre-drafted email personal touches: thank-yous, win-back messages, etc. Send manually or set it and forget it: your choice.",
      "Integrated email w/ Automated google ",
      "\"Ask Anything\" AI assistant answers questions about your customers and business",
      "Pre-built business insights show you trends and growth opportunities",
    ],
  },
  {
    name: "Community Builder",
    price: "299",
    period: "/mo",
    buttonText: "Beta - Join the waitlist",
    description: (
      <>
        Recommended for merchants who have (or want to have) annual revenue above $1M
      </>
    ),
    features: [
      "Everything in Tier 1 & 2",
      "AI-enriched profiles for ALL your VIPs and Regulars",
      "Unlimited \"Ask Anything\" about any customer or trend",
      "Integrated email and SMS with unlimited AI pre-drafts to help you move with speed",
      "\"Next best actions\" recommendation engine to help drive focus",
      "Integrated appointment and event scheduling",
      "Cross-merchant insights and joint promotional opportunities",
      "Direct chat with other local merchants in your network",
    ],
  },
];

