"use client";

import { useEffect, useState } from "react";
import Button from "./Button";

interface StickyBottomCTAProps {
  onButtonClick?: () => void;
  buttonHref?: string;
  hideBeforeElementId?: string; // Element ID to hide before (e.g., "newsletter-signup")
}

export default function StickyBottomCTA({ 
  onButtonClick,
  buttonHref,
  hideBeforeElementId
}: StickyBottomCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Show after scrolling down 300px
      const shouldShow = scrollY > 300;
      
      // Check if should hide before element
      let shouldHide = false;
      if (hideBeforeElementId) {
        const targetElement = document.getElementById(hideBeforeElementId);
        if (targetElement) {
          const elementTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
          const offset = 200; // Start hiding 200px before the element
          
          if (scrollY + window.innerHeight > elementTop - offset) {
            shouldHide = true;
          }
        }
      }

      const shouldBeVisible = shouldShow && !shouldHide;

      // Handle visibility state changes
      if (shouldBeVisible && !isVisible) {
        // Show the component
        setShouldRender(true);
        setIsVisible(true);
        setIsExiting(false);
      } else if (!shouldBeVisible && isVisible) {
        // Hide the component with animation
        setIsExiting(true);
        setIsVisible(false);
        setTimeout(() => {
          setShouldRender(false);
          setIsExiting(false);
        }, 300); // Match animation duration
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hideBeforeElementId, isVisible]);

  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else if (buttonHref) {
      const element = document.querySelector(buttonHref);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - 100;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  if (!shouldRender) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-40 ${isExiting ? 'animate-slideDown' : 'animate-slideUp'}`}>
      <div className="bg-[#332E2E] shadow-[0_-10px_30px_-10px_rgba(0,0,0,0.3)] px-6 md:px-16 py-4 flex items-center justify-start md:justify-end">
        <Button
          onClick={handleClick}
          variant="primary"
          size="medium"
          className="w-full md:w-auto"
        >
          Become a villager
        </Button>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(100%);
          }
        }

        .animate-slideUp {
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-slideDown {
          animation: slideDown 0.3s cubic-bezier(0.4, 0, 0.6, 1) forwards;
        }
      `}</style>
    </div>
  );
}

