import { CarouselSlide } from "../../types/slides";

// --- Owner Slides ---

export const OWNER_SLIDES: CarouselSlide[] = [
  {
    id: "impact",
    type: "image",
    imageSrc: "/block02_image_06.png",
    imageAlt: "Local Impact",
    title: "Start With a Name and an Email",
    description: "Real relationships begin with a name and email; they turn anonymous transactions into recognized customers and unlock your ability to remember, reach, and reward the people who drive your business most.",
    },
  {

    id: "chart",
    type: "productHighlight",
    title: "Know Them and Personalize their Experience",
    imageSrc: "/phone_04.png",
    imageAlt: "Local Impact",
    description: "Once you know your customers, you can serve them better. It starts with a powerful snapshot of real impact: the Local Impact Statement. Each customer sees exactly how their dollars support the local community, and their loyalty deepens.",
  
  },
 
  {
    id: "engage",
    type: "image",
    imageSrc: "/block02_image_05.png",
    imageAlt: "Engage & Grow",
    title: "Deepen the Connection",
    description: "As your customers become a community, your tools grow with you. Villagers handle the busy work so you can amplify your personal touch: building the kind of loyalty big-box stores can't buy.<br/><br/>You provide the heart; we provide the infrastructure.",
  },
  
];

export const OWNER_QUOTE_SLIDES: CarouselSlide[] = [
  {
    id: "quote-1",
    type: "quote-with-logo",
    quote: "\u201CVillagers helped us connect with the customers who make our shop thrive.\u201D",
    logoSrc: "/logo_yonderlust.svg",
    logoAlt: "Yonderlust",
    imageSrc: "/quote_01b.png",
    imageAlt: "Customer testimonial",
    logoWidth: 180,
    logoHeight: 50,
  },
  {
    id: "quote-2",
    type: "quote-with-logo",
    quote: "\u201CVillagers changed my business in ways I could not have thought possible.\u201D",
    logoSrc: "/logo_indio.svg",
    logoAlt: "Indio",
    imageSrc: "/quote_02.png",
    imageAlt: "Customer testimonial",
    logoWidth: 110,
    logoHeight: 50,
  },
  {
    id: "quote-3",
    type: "quote-with-logo",
    quote: "\u201CI was able to connect with my <br/>customers like never before \u201D",
    logoSrc: "/logo_ascend.svg",
    logoAlt: "Ascend",
    imageSrc: "/quote_03.png",
    imageAlt: "Customer testimonial",
    logoWidth: 150,
    logoHeight: 50,
  },
  {
    id: "quote-4",
    type: "quote-with-logo",
    quote: "\u201CVillagers made connecting with my customers online so easy.\u201D",
    logoSrc: "/logo_bullseye.svg",
    logoAlt: "Bullseye",
    imageSrc: "/quote_05.png",
    imageAlt: "Customer testimonial",
    logoWidth: 100,
    logoHeight: 110,
  },
];

// --- Customer Slides ---

export const CUSTOMER_SLIDES: CarouselSlide[] = [
 
  {
    id: "impact",
    type: "image",
    imageSrc: "/Customer_07.png",
    imageAlt: "Community Impact",
    title: "How You Create The Ripple Effect",
    description: "<b>The Power of 3%</b> Your spending power has exponential impact. Shifting just 3% of your spending to local merchants pumps millions back into your community's schools and jobs, and keeps your village's unique spirit alive.",
  },

  {
    id: "chart",
    type: "chart",
    title: "See Your Spending in Action",
    description: "Get a personalized monthly <b>Local Impact Statement</b> showing exactly how your support strengthens your village and drives local prosperity.",
    chartConfig: {
      largePercentage: "85%",
      largeLabel: "Total Sales",
      smallPercentage: "35%",
      smallLabel: "you",
    },
  },
  {
    id: "engage",
    type: "image",
    imageSrc: "/Customer_10.png",
    imageAlt: "Thrive Together",
    title: "When You Are Better Known, You Are Better Served",
    description: "Share your name and email to unlock better service and real relationships. Local merchants want to know you, so they can serve you better, thank you personally, and grow alongside you.",
  },
  {
    id: "value",
    type: "image",
    imageSrc: "/Customer_11.png",
    imageAlt: "Belong",
    title: "Let's Lift the Whole Village.",
    description: "If your favorite shop or restaurant isn't part of the Villagers network yet, invite them to discover the power of IRL relationships",
  },
];

export const CUSTOMER_QUOTE_SLIDES: CarouselSlide[] = [
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
