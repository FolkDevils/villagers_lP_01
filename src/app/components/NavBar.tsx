"use client";

import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full bg-[#FF4930] px-6 md:px-10 py-1 flex items-center h-20">
      <Link href="/" className="flex items-center">
        <Image
          src="/villagerLogo_new.svg"
          alt="Villagers"
          width={171}
          height={51}
          className="h-12 w-auto"
        />
      </Link>
    </nav>
  );
}

