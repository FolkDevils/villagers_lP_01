import Image from "next/image";
import Button from "../ui/Button";

interface HeroSectionProps {
  backgroundImage: string;
  mobileBackgroundImage?: string;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  buttonText: string;
  onButtonClick?: () => void;
  buttonHref?: string;
}

export default function HeroSection({ 
  backgroundImage, 
  mobileBackgroundImage, 
  title, 
  description, 
  buttonText,
  onButtonClick,
  buttonHref
}: HeroSectionProps) {
  
  const handleClick = (e: React.MouseEvent) => {
    if (onButtonClick) {
      e.preventDefault();
      onButtonClick();
    } else if (buttonHref) {
      e.preventDefault();
      const element = document.querySelector(buttonHref);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - 100; // 100px padding from top
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section className="relative w-full h-[750px] md:h-[880px] flex items-end">
      {/* Desktop Background Image */}
      <Image
        src={backgroundImage}
        alt="Hero Background"
        fill
        className="object-cover object-center hidden md:block"
        priority
      />
      
      {/* Mobile Background Image */}
      {mobileBackgroundImage && (
        <Image
          src={mobileBackgroundImage}
          alt="Hero Background Mobile"
          fill
          className="object-cover object-center block md:hidden"
          priority
        />
      )}
      
      {/* Content Container */}
      <div className="relative z-10 w-full px-8 md:px-10 py-10">
        <div className="bg-[rgba(0,0,0,0.7)] rounded-xl px-8 md:px-10 py-8 md:py-8 max-w-[822px]">
          <div className="flex flex-col gap-6 md:gap-6">
            <h1 className="font-playfair font-medium text-[#FDF0DA] text-2xl md:text-[40px] leading-tight">
              {title}
            </h1>
            
            <p className="font-poppins text-[#E4DBCD] p-responsive pb-4 leading-relaxed">
              {description}
            </p>
            
            <div>
              <Button 
                onClick={handleClick}
                variant="primary"
                size="medium"
                className="w-full md:w-auto"
              >
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

