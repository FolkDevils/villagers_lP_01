"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Does this work with my POS system?",
    answer: "Yes. We integrate with Square, Clover, Lightspeed, Shopify, and Toast (coming soon)."
  },
  {
    question: "Do I have to manually enter customer data?",
    answer: "Nope. We automatically organize your transaction data from your POS. You never touch a spreadsheet."
  },
  {
    question: "What if I'm not tech-savvy?",
    answer: "Most of our merchants aren't. If you can write an email or send a text, you can use Villagers."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. No contracts. Cancel anytime."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="w-full">
      <div className="space-y-0">
        {FAQ_ITEMS.map((item, index) => (
          <div key={index} className="border-b border-[#332E2E]/20 last:border-b-0">
            <button
              onClick={() => toggleItem(index)}
              className="w-full text-left py-6 px-4 transition-transform duration-200 focus:outline-none rounded-lg mx-2"
              aria-expanded={openItems.has(index)}
              aria-controls={`faq-answer-${index}`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-[#332E2E] text-base pr-4" style={{ fontFamily: 'var(--font-poppins), sans-serif' }}>
                  {item.question}
                </h3>
                <div className={`transform transition-transform duration-200 ${openItems.has(index) ? 'rotate-180' : ''}`}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#332E2E]"
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </button>

            <div
              id={`faq-answer-${index}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openItems.has(index)
                  ? 'max-h-96 opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="pb-6 px-6">
                <p className="p-responsive text-[#332E2E] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}