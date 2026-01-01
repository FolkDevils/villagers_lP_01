"use client";

import Button from "./Button";

interface FormProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  buttonText?: string;
  onSubmit?: (e: React.FormEvent) => void;
}

export default function Form({ 
  title = (
    <>
      Join the Movement. <br />
      Build Your Village.
    </>
  ),
  description = "Sign up for the Villagers newsletter to stay in the know about what's happening locally, new shops, events, and the people who keep our community thriving.",
  buttonText = "Sign Up Now",
  onSubmit
}: FormProps) {
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8 items-center">
      {/* Header Text */}
      {(title || description) && (
        <div className="flex flex-col gap-6 items-center justify-center text-center">
          {title && (
            <h2 className="font-playfair font-bold text-3xl md:text-5xl leading-tight text-[#FF4930]">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-white text-sm md:text-base leading-relaxed max-w-xl">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Form Fields */}
      <div className="flex flex-col gap-4 items-end w-full">
        <input 
          type="text" 
          placeholder="First Name*" 
          required
          className="w-full bg-white/10 rounded-full px-8 py-4 text-white placeholder-white text-sm md:text-base border-white/30 outline-none focus:ring-2 focus:ring-[#FFFFFF]/50 focus:border-[#FFFFF]"
        />
        <input 
          type="text" 
          placeholder="Last Name" 
          className="w-full bg-white/10 rounded-full px-8 py-4 text-white placeholder-white text-sm md:text-base border-white/30 outline-none focus:ring-2 focus:ring-[#FFFFFF]/50 focus:border-[#FFFFF]"
        />
        <input 
          type="tel" 
          placeholder="Mobile Phone" 
          className="w-full bg-white/10 rounded-full px-8 py-4 text-white placeholder-white text-sm md:text-base border-white/30 outline-none focus:ring-2 focus:ring-[#FFFFFF]/50 focus:border-[#FFFFF]"
        />
        <input 
          type="email" 
          placeholder="Email*" 
          required
          className="w-full bg-white/10 rounded-full px-8 py-4 text-white placeholder-white text-sm md:text-base border-white/30 outline-none focus:ring-2 focus:ring-[#FFFFF]/50 focus:border-[#FFFFF]"
        />
        
        <div className="h-4" />
        
        <Button 
          type="submit"
          variant="primary"
          size="medium"
          className="mt-4"
        >
          {buttonText}
        </Button>
      </div>
    </form>
  );
}

