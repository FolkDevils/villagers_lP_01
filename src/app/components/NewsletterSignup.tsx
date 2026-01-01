export default function NewsletterSignup() {
  return (
    <div className="bg-[#332E2E] w-full flex flex-col gap-12 items-center justify-center pt-16 px-6 pb-16 md:px-16 relative rounded-[20px]">
      {/* Header Text */}
      <div className="flex flex-col gap-8 items-center justify-center text-center w-full max-w-4xl">
        <p className="font-playfair font-bold text-3xl md:text-5xl leading-tight text-[#FF5C4D]">
          Join the Movement. <br />
          Build Your Village.
        </p>
        <p className="text-white text-sm md:text-base leading-relaxed max-w-xl">
          Sign up for the Villagers newsletter to stay in the know about what's happening locally, new shops, events, and the people who keep our community thriving.
        </p>
      </div>

      {/* Form Fields */}
      <div className="flex flex-col gap-4 items-end w-full max-w-4xl">
        <input 
          type="text" 
          placeholder="First Name*" 
          className="w-full bg-white/10 rounded-full px-8 py-4 text-white placeholder-white/70 text-sm md:text-base border-2 border-white/30 outline-none focus:ring-2 focus:ring-[#FF5C4D]/50 focus:border-[#FF5C4D]"
        />
        <input 
          type="text" 
          placeholder="Last Name" 
          className="w-full bg-white/10 rounded-full px-8 py-4 text-white placeholder-white/70 text-sm md:text-base border-2 border-white/30 outline-none focus:ring-2 focus:ring-[#FF5C4D]/50 focus:border-[#FF5C4D]"
        />
        <input 
          type="tel" 
          placeholder="Mobile Phone" 
          className="w-full bg-white/10 rounded-full px-8 py-4 text-white placeholder-white/70 text-sm md:text-base border-2 border-white/30 outline-none focus:ring-2 focus:ring-[#FF5C4D]/50 focus:border-[#FF5C4D]"
        />
        <input 
          type="email" 
          placeholder="Email*" 
          className="w-full bg-white/10 rounded-full px-8 py-4 text-white placeholder-white/70 text-sm md:text-base border-2 border-white/30 outline-none focus:ring-2 focus:ring-[#FF5C4D]/50 focus:border-[#FF5C4D]"
        />
        
        <div className="h-4" />
        
        <button className="bg-[#FF5C4D] border-[3px] mt-4 border-[#FF5C4D] rounded-full px-6 py-4 text-white font-semibold text-base uppercase hover:bg-[#FF6B4D] hover:border-[#FF6B4D] transition-colors cursor-pointer">
          Become a villager
        </button>
      </div>
    </div>
  );
}

