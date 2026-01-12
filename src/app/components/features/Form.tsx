"use client";

import Button from "../ui/Button";

interface FormProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  buttonText?: string;
  onSubmit?: (e: React.FormEvent) => void;
}

export default function Form({ 
  title = (
    <>
      You Have the Superpower. <br />
      You Just Needed the Data and the Tools.
    </>
  ),
  description = "The giants have their data and infrastructure. Now local has theirs. Reach out to schedule a demo today.",
  buttonText = "Start Building",
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
        <div className="w-full">
          <label htmlFor="firstName" className="sr-only">First Name (Required)</label>
          <input 
            id="firstName"
            name="firstName"
            type="text" 
            placeholder="First Name*" 
            required
            aria-required="true"
            className="w-full bg-white/10 rounded-full px-8 py-4 text-white placeholder-white text-sm md:text-base border-white/30 outline-none focus:ring-2 focus:ring-[#FFFFFF]/50 focus:border-[#FFFFFF]"
          />
        </div>
        <div className="w-full">
          <label htmlFor="lastName" className="sr-only">Last Name</label>
          <input 
            id="lastName"
            name="lastName"
            type="text" 
            placeholder="Last Name" 
            className="w-full bg-white/10 rounded-full px-8 py-4 text-white placeholder-white text-sm md:text-base border-white/30 outline-none focus:ring-2 focus:ring-[#FFFFFF]/50 focus:border-[#FFFFFF]"
          />
        </div>
        <div className="w-full">
          <label htmlFor="phone" className="sr-only">Mobile Phone</label>
          <input 
            id="phone"
            name="phone"
            type="tel" 
            placeholder="Mobile Phone" 
            className="w-full bg-white/10 rounded-full px-8 py-4 text-white placeholder-white text-sm md:text-base border-white/30 outline-none focus:ring-2 focus:ring-[#FFFFFF]/50 focus:border-[#FFFFFF]"
          />
        </div>
        <div className="w-full">
          <label htmlFor="email" className="sr-only">Email (Required)</label>
          <input 
            id="email"
            name="email"
            type="email" 
            placeholder="Email*" 
            required
            aria-required="true"
            className="w-full bg-white/10 rounded-full px-8 py-4 text-white placeholder-white text-sm md:text-base border-white/30 outline-none focus:ring-2 focus:ring-[#FFFFFF]/50 focus:border-[#FFFFFF]"
          />
        </div>
        
        <div className="h-4" />
        
        <Button 
          type="submit"
          variant="primary"
          size="medium"
          className="mt-0"
        >
          {buttonText}
        </Button>
      </div>
    </form>
  );
}

