import { motion } from "framer-motion";

const skills = [
  "JavaScript", "React", "Three.js", "WebGL", "GSAP", 
  "TypeScript", "Framer Motion", "Next.js", "UI/UX", "CSS"
];

export default function HeroSkills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex flex-wrap gap-2 justify-center max-w-2xl mx-auto mb-12"
    >
      {skills.map((skill, index) => (
        <motion.span
          key={skill}
          className="skill-pill"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.4 + index * 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {skill}
        </motion.span>
      ))}
    </motion.div>
  );
}
