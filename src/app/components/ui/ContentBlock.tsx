"use client";

import { useRef, Ref } from "react";

interface ContentBlockProps {
  title: string;
  description: string | React.ReactNode;
  rightComponent?: React.ReactNode;
  sectionRef?: Ref<HTMLElement>;
}

export default function ContentBlock({ title, description, rightComponent, sectionRef }: ContentBlockProps) {
  return (
    <section ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-20 pb-20 lg:gap-20 items-center">
      {/* Left Text Content */}
      <div className="flex flex-col gap-4 max-w-[580px] order-2 lg:order-1 lg:col-span-5">
        <h1 className="h1-responsive text-[#332E2E]">
          {title}
        </h1>
        
        <div className="p-responsive text-[#333333] space-y-6 leading-snug">
          {typeof description === 'string' ? <p>{description}</p> : description}
        </div>
      </div>

      {/* Right Component */}
      {rightComponent && (
        <div className="relative w-full max-w-[600px] lg:max-w-none lg:w-full justify-self-center order-1 lg:order-2 lg:col-span-7 flex items-center justify-center">
          {rightComponent}
        </div>
      )}
    </section>
  );
}

