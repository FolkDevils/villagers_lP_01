import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ChartAnimationProps {
  section2ContentRef?: React.RefObject<HTMLDivElement | null>;
}

// Since chart animations are now encapsulated within BarChart,
// this hook only handles the global page background and the text reveal.
export function useChartAnimations({
  section2ContentRef,
}: ChartAnimationProps = {}) {
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // --- 1. Set Initial Body Color ---
      gsap.set("body", { backgroundColor: "#FCFBF5" });

      // --- 2. Text Content Animation ---
      if (section2ContentRef?.current) {
        gsap.fromTo(section2ContentRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section2ContentRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // --- 3. Scroll-Linked Color Interpolation ---
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          start: "top top", 
          end: "bottom bottom",
          scrub: 1, 
        }
      });
      
      tl.to("body", { backgroundColor: "#FEFEF9", duration: 0.5 }, 0.3);
      tl.to("body", { backgroundColor: "#FFFFFE", duration: 0.5 }, 1);
    });

    return () => ctx.revert();
  }, [section2ContentRef]);
}
