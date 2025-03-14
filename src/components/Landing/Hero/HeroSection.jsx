import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroText from "./HeroText";
import HeroSkills from "./HeroSkills";
import HeroButtons from "./HeroButtons";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    tl.to(textRef.current, {
      y: -100,
      opacity: 0.2,
      ease: "power2.in",
    });

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, []);

  return (
    <section
      id="hero-section"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 md:px-12"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background mix-blend-overlay pointer-events-none" />

      <div ref={textRef} className="relative z-10 max-w-4xl mx-auto text-center">
        <HeroText />
        <HeroSkills />
        <HeroButtons />
      </div>
    </section>
  );
}
