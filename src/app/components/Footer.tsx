import Image from "next/image";
import Link from "next/link";

const FOOTER_LINKS = [
  { label: "About", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Impact", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full max-w-[1440px] mx-auto px-8 pb-16">
      <div className="w-full flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-0">
        {/* Mobile Logo (Top Left) */}
        <div className="relative w-[160px] h-[56px] lg:hidden">
          <Image
            src="/logo_sm.svg"
            alt="Villagers Logo"
            fill
            className="object-contain object-left"
          />
        </div>

        {/* Links */}
        <nav className="flex flex-col lg:flex-row gap-6 lg:gap-8 pb-[14px]">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-work font-semibold text-[#03879e] text-sm uppercase hover:opacity-80 transition-opacity whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Logo (Bottom Right) */}
        <div className="relative w-[211px] h-[74px] hidden lg:block">
          <Image
            src="/logo_sm.svg"
            alt="Villagers Logo"
            fill
            className="object-contain object-right-bottom"
          />
        </div>
      </div>
    </footer>
  );
}

