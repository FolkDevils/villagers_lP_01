import Image from "next/image";

interface HeroSectionProps {
  backgroundImage: string;
  title: string | React.ReactNode;
  description: string;
  buttonText: string;
}

export default function HeroSection({ backgroundImage, title, description, buttonText }: HeroSectionProps) {
  return (
    <section className="relative w-full h-[800px] flex items-end">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Hero Background"
        fill
        className="object-cover object-center"
        priority
      />
      
      {/* Content Container */}
      <div className="relative z-10 w-full px-10 py-10">
        <div className="bg-[rgba(0,0,0,0.7)] rounded-xl px-8 md:px-10 py-8 md:py-8 max-w-[822px]">
          <div className="flex flex-col gap-6 md:gap-6">
            <h1 className="font-playfair font-medium text-[#FDF0DA] text-3xl md:text-[40px] leading-tight">
              {title}
            </h1>
            
            <p className="font-poppins text-[#E4DBCD] text-base md:text-[16px] pb-4 leading-relaxed">
              {description}
            </p>
            
            <div>
              <button className="bg-[#FF4930] hover:bg-[#FF5C4D] transition-colors rounded-full px-10 py-6 text-[#FFECEC] font-semibold text-lg uppercase">
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

