"use client";

import { Ref } from "react";

interface TwoColumnLayoutProps {
  imagePosition: "left" | "right";
  imageContent: React.ReactNode;
  textContent: React.ReactNode;
  sectionRef?: Ref<HTMLElement>;
  className?: string;
}

export default function TwoColumnLayout({
  imagePosition,
  imageContent,
  textContent,
  sectionRef,
  className = "",
}: TwoColumnLayoutProps) {
  const isImageLeft = imagePosition === "left";

  return (
    <section
      ref={sectionRef}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${className}`}
    >
      {/* Text Column - Always 5 columns */}
      <div
        className={`flex flex-col gap-4 max-w-[580px] ${
          isImageLeft
            ? "order-2 lg:order-2 lg:col-span-5"
            : "order-2 lg:order-1 lg:col-span-5"
        }`}
      >
        {textContent}
      </div>

      {/* Image Column - Always 7 columns, always centered */}
      <div
        className={`flex items-center justify-center ${
          isImageLeft
            ? "order-1 lg:order-1 lg:col-span-7"
            : "order-1 lg:order-2 lg:col-span-7"
        }`}
      >
        {imageContent}
      </div>
    </section>
  );
}

