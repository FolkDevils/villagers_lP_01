"use client";

import Link from "next/link";
import { cn } from "../../../lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ 
  children, 
  onClick, 
  href,
  variant = 'primary',
  size = 'medium',
  className = '',
  type = 'button'
}: ButtonProps) {
  
  // Base styles that apply to all buttons
  const baseStyles = "transition-all duration-300 rounded-lg font-semibold uppercase cursor-pointer inline-block text-center";
  
  // Variant styles
  const variantStyles = {
    primary: "bg-[#FF4930] text-white hover:bg-white hover:text-[#FF4930] border-2 border-[#FF4930] hover:border-white",
    secondary: "bg-white text-[#FF4930] hover:bg-[#FF4930] hover:text-white border-2 border-[#FF4930]",
    outline: "bg-transparent text-[#332e2e] hover:bg-[#FF4930] hover:text-white border-[3px] border-[#332e2e] hover:border-[#FF4930]"
  };
  
  // Size styles - consistent across all screen sizes
  const sizeStyles = {
    small: "px-6 py-2 text-sm",
    medium: "px-10 py-4 text-base md:text-lg",
    large: "px-12 py-5 text-lg md:text-xl"
  };
  
  // Merged classes using cn()
  const combinedStyles = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);
  
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e);
    }
  };
  
  // If href is provided, determine if it's internal or external/hash
  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('//');
    const isHash = href.startsWith('#');
    
    // Use regular anchor for external links or hash links (smooth scroll)
    if (isExternal || isHash) {
      return (
        <a 
          href={href}
          onClick={handleClick}
          className={combinedStyles}
        >
          {children}
        </a>
      );
    }
    
    // Use Next.js Link for internal navigation
    return (
      <Link 
        href={href}
        onClick={handleClick}
        className={combinedStyles}
      >
        {children}
      </Link>
    );
  }
  
  return (
    <button 
      type={type}
      onClick={handleClick}
      className={combinedStyles}
    >
      {children}
    </button>
  );
}
