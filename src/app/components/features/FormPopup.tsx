"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Form from "./Form";

interface FormPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  buttonText?: string;
}

export default function FormPopup({ 
  isOpen, 
  onClose, 
  title, 
  description,
  buttonText 
}: FormPopupProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  // Handle opening
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
    }
  }, [isOpen]);
  
  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShouldRender(false);
      setIsClosing(false);
      onClose();
    }, 350); // Slightly longer than animation duration for smooth completion
  };

  if (!shouldRender) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    // This should be connected to your backend API or email service
    handleClose();
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${isClosing ? 'animate-fadeOut' : 'animate-fadeIn'}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-xs" />
      
      {/* Popup Container */}
      <div 
        className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#332E2E] rounded-[20px] p-8 md:p-12 shadow-2xl ${isClosing ? 'animate-popDown' : 'animate-popUp'}`}
        style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-[46px] h-[46px] rounded-full border-2 border-white/30 flex items-center justify-center transition-all hover:bg-[#FF4930] hover:border-[#FF4930] focus:outline-none group"
          aria-label="Close popup"
        >
          <Image
            src="/icon_x.svg"
            alt="Close"
            width={20}
            height={20}
            className="opacity-30 group-hover:opacity-100 transition-opacity"
          />
        </button>

        {/* Form */}
        <Form 
          title={title}
          description={description}
          buttonText={buttonText}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
