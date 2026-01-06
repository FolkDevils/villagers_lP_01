import Image from "next/image";

interface RoundedImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
  topRadius?: string;
  bottomRadius?: string;
}

/**
 * Reusable rounded image component with consistent styling
 * Default: rounded-t-[500px] rounded-b-[500px] (pill shape top and bottom)
 * Can customize via topRadius and bottomRadius props
 */
export default function RoundedImage({
  src,
  alt,
  priority = false,
  className = "",
  sizes = "(max-width: 640px) 400px, (max-width: 1024px) 500px, 700px",
  topRadius = "rounded-t-4",
  bottomRadius = "rounded-b-4",
}: RoundedImageProps) {
  return (
    <div
      className={`relative w-full h-full ${topRadius} ${bottomRadius} overflow-hidden ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center"
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}

