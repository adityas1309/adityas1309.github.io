import React, { useLayoutEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./ProjectCard";
import { projects } from "./ProjectData";

export default function ProjectSection() {
  const sectionRef = useRef(null);
  const titleContainerRef = useRef(null);
  const horizontalRef = useRef(null);
  const projectsRef = useRef(null);

  // Compute total scroll width dynamically
  const getScrollWidth = useCallback(() => {
    const cardWidth = 400; // Approximate width of each project card
    const gap = 32; // Space between cards
    return projects.length * (cardWidth + gap) + window.innerWidth;
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const titleContainer = titleContainerRef.current;
    const horizontal = horizontalRef.current;

    // Adjust section height dynamically
    gsap.set(section, {
      height: `${100 + (getScrollWidth() / window.innerWidth) * 100}vh`,
    });

    // Main ScrollTrigger animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${getScrollWidth()}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // Animate title container (moves left + fades out)
    tl.to(titleContainer, {
      x: "-50vw",
      scale: 0.6,
      opacity: 0, // **NEW: Fade out title**
      ease: "power2.inOut",
      duration: 2,
    });

    // Horizontal scroll for projects
    tl.to(
      horizontal,
      {
        x: () => -(getScrollWidth() - window.innerWidth),
        ease: "none",
      },
      "-=1"
    );

    // Project card animations (fade-in effect)
    const projectElements = projectsRef.current.children;
    gsap.set(projectElements, { opacity: 0, x: 100 });

    gsap.to(projectElements, {
      opacity: 1,
      x: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: horizontal,
        start: "top 80%",
        end: "+=300",
        toggleActions: "play none none reverse",
      },
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [getScrollWidth]);

  return (
    <section ref={sectionRef} className="relative bg-black overflow-hidden">
      {/* Title Section (Now fades out smoothly) */}
      <div
        ref={titleContainerRef}
        className="h-screen flex items-center justify-center bg-black z-10 relative"
      >
        <h1
          className="text-7xl md:text-9xl font-bold tracking-tighter"
          style={{
            background: "linear-gradient(to right, #ffffff, #888888)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          MY PROJECTS
        </h1>
      </div>

      {/* Horizontal Scrolling Section */}
      <div
        ref={horizontalRef}
        className="absolute top-0 left-[100vw] flex items-center h-screen z-0"
      >
        <div ref={projectsRef} className="flex gap-8 px-[10vw]">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
