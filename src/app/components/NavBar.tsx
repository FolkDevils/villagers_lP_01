"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show nav when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Hide nav when scrolling down past 100px
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 w-full bg-[#FF4930] px-6 md:px-10 py-1 flex items-center h-20"
      style={{ 
        transform: `${isVisible ? 'translateY(0)' : 'translateY(-100%)'} translateZ(0)`,
        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
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

