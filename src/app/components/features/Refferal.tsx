"use client";

import Button from "../ui/Button";

export default function Refferal() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up submission / analytics as needed
  };

  return (
    <div id="referral-signup" className="bg-[#332E2E] w-full flex flex-col gap-12 items-center justify-center pt-16 px-6 pb-16 md:px-16 relative rounded-[20px]">
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8 items-center">
        {/* Header Text */}
        <div className="flex flex-col gap-6 items-center justify-center text-center">
          <h2 className="font-playfair font-bold text-3xl md:text-5xl leading-tight text-[#FF4930]">
            Know a Local Business That Should Join?
          </h2>
          <p className="text-white p-responsive leading-relaxed ">
          The more merchants that join, the more impact we can show and the stronger your community becomes.  </p>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-4 items-end w-full">
          <div className="w-full">
            <label htmlFor="businessName" className="sr-only">Business Name (Required)</label>
            <input
              id="businessName"
              name="businessName"
              type="text"
              placeholder="Business name*"
              required
              aria-required="true"
              className="w-full bg-white/10 rounded-lg px-8 py-4 text-white placeholder-white text-sm md:text-base border-white/30 outline-none focus:ring-2 focus:ring-[#FFFFFF]/50 focus:border-[#FFFFFF]"
            />
          </div>

          <div className="w-full">
            <label htmlFor="businessContact" className="sr-only">Business Website or Instagram (or Email)</label>
            <input
              id="businessContact"
              name="businessContact"
              type="text"
              placeholder="Business website or Instagram (or email)"
              className="w-full bg-white/10 rounded-lg px-8 py-4 text-white placeholder-white text-sm md:text-base border-white/30 outline-none focus:ring-2 focus:ring-[#FFFFFF]/50 focus:border-[#FFFFFF]"
            />
          </div>

          <div className="h-4" />

          <Button
            type="submit"
            variant="primary"
            size="medium"
            className="mt-0"
          >
            Send Referral
          </Button>
        </div>
      </form>
    </div>
  );
}

