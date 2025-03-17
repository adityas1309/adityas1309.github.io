import React, { useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  // Mouse move handler for parallax effect
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const moveX = (x - centerX) / 20;
    const moveY = (y - centerY) / 20;

    card.style.transform = `perspective(1000px) rotateY(${moveX}deg) rotateX(${-moveY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)";
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      className="group relative overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 h-[500px] w-[350px] transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Project image with overlay */}
      <div className="absolute inset-0 z-0 transition-all duration-500">
        <div
          className={`absolute inset-0 bg-black/60 z-10 transition-opacity duration-500 ${
            isHovered ? "opacity-50" : "opacity-70"
          }`}
        />
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-end p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium bg-black/50 backdrop-blur-sm rounded-full border border-zinc-800"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{project.title}</h3>

        {/* Description */}
        <p className="text-sm text-zinc-300 mb-4 line-clamp-2">{project.description}</p>

        {/* View project button */}
        <a
          href={project.link}
          className="inline-flex items-center gap-1 text-sm font-medium text-white hover:text-zinc-300 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>

      {/* Hover effect - glowing border */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)",
          boxShadow: "0 0 30px rgba(255,255,255,0.1) inset",
        }}
      />
    </div>
  );
}
