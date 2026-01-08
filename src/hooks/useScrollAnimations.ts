import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Since animations are now encapsulated within components (CircularChart, BarChart),
// this hook only needs to handle the global page-level animations like background color.
export function useScrollAnimations() {
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // --- 1. Set Initial Body Color ---
      gsap.set("body", { backgroundColor: "#FCFBF5" });

      // --- 2. Scroll-Linked Color Interpolation ---
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          start: "top top", 
          end: "bottom bottom",
          scrub: 1, 
        }
      });

      tl.to("body", { backgroundColor: "#FEFEF9", duration: 0.5 }, 0.3);
      tl.to("body", { backgroundColor: "#FFFFFE", duration: 0.4 }, .95);
    });

    return () => ctx.revert();
  }, []);
}
