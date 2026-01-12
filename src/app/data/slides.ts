import { CarouselSlide } from "../../types/slides";

// --- Owner Slides ---

export const OWNER_SLIDES: CarouselSlide[] = [
  {
    id: "impact",
    type: "productHighlight",
    imageSrc: "/phone_04.png",
    imageAlt: "Local Impact",
    title: "Easy tools that turn local pride into repeat customers. ",
    description: "Your customers want experiences and relationships. It's never been a better time to be a local merchant.",
  },
  
  
  {
    id: "chart",
    type: "chart",
    title: "Know Your Village",
    description: "Get to know the people who really matter— the 35% who drive 80% of your revenue. Villagers automatically brings your top customers to the forefront and helps you to keep them coming back, so you can focus where it matters most.",
    chartConfig: {
      largePercentage: "85%",
      largeLabel: "Total Sales",
      smallPercentage: "35%",
      smallLabel: "customers",
    },
  },
 
  {
    id: "engage",
    type: "image",
    imageSrc: "/block02_image_06.png",
    imageAlt: "Engage & Grow",
    title: "Engage & Grow",
    description: "Email, SMS, events, and AI insights — all in one place. Your AI assistant, Alder, enriches customer profiles, drafts messages, and identifies your next best actions automatically. So you can be on the floor, talking to the people that matter.",
  },
  {
    id: "value",
    type: "image",
    imageSrc: "/block02_image_07.png",
    imageAlt: "Create Value",
    title: "Create Lasting Value",
    description: "Villagers is all about helping you retain your best customers, elevate your regulars, and turn data into true connection points. Nothing grows your dream like real people and real contact. Villagers is here to support that.",
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
    title: "Let's make shopping <br />personal again.",
    description: "In the 1980s, local merchants earned about 50% of all foot traffic. Today, that number has dropped to 28%, and the personal relationships that once defined local businesses are fading. Villagers believes those connections can exist again.",
  },

  {
    id: "chart",
    type: "chart",
    title: "Be Recognized by real people",
    description: "Villagers helps local shops recognize the 35% of customers who drive 80% of their business, turning everyday visits into real relationships.",
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
    title: "Small shifts, real impact.",
    description: "Moving just 3% of online purchases back to local merchants would create immediate, lasting benefits for local businesses and the communities they support.",
  },
  {
    id: "value",
    type: "image",
    imageSrc: "/Customer_11.png",
    imageAlt: "Belong",
    title: "Be a part of it all.",
    description: "Nothing feels better than a spirit of belonging. Villagers brings communities together. Our shared goal is for the neighborhood you love and live in to thrive and prosper. Together.",
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
