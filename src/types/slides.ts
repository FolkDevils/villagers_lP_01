// Slide content types

export interface BaseSlide {
  id: string;
  type: "chart" | "image" | "quote" | "quote-with-logo";
}

export interface ChartSlide extends BaseSlide {
  type: "chart";
  title: string;
  description: React.ReactNode;
  chartConfig?: {
    largePercentage: string;
    largeLabel: string;
    smallPercentage: string;
    smallLabel: string;
  };
}

export interface ImageSlide extends BaseSlide {
  type: "image";
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: React.ReactNode;
}

export interface QuoteSlide extends BaseSlide {
  type: "quote";
  imageSrc: string;
  imageAlt: string;
  quote: string;
}

export interface QuoteWithLogoSlide extends BaseSlide {
  type: "quote-with-logo";
  imageSrc: string;
  imageAlt: string;
  quote: string;
  logoSrc: string;
  logoAlt: string;
  logoWidth?: number;
  logoHeight?: number;
}

export type CarouselSlide = ChartSlide | ImageSlide | QuoteSlide | QuoteWithLogoSlide;

