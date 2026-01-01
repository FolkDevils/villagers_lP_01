"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#332E2E] px-6 md:px-12 py-6">
      <div className=" mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 pb-3 md:pb-0">
          <Link
            href="#"
            className="text-[#FCFBF5] hover:text-[#FF5C4D] transition-colors font-poppins font-semibold text-xs md:text-sm uppercase"
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-[#FCFBF5] hover:text-[#FF5C4D] transition-colors font-poppins font-semibold text-xs md:text-sm uppercase"
          >
            Terms & Conditions
          </Link>
          <Link
            href="#"
            className="text-[#FCFBF5] hover:text-[#FF5C4D] transition-colors font-poppins font-semibold text-xs md:text-sm uppercase"
          >
            Contact
          </Link>
        </div>

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/villagerLogo_new.svg"
            alt="Villagers"
            width={171}
            height={51}
            className="h-10 md:h-12 w-auto"
          />
        </Link>
      </div>
    </footer>
  );
}

