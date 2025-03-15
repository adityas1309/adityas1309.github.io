import { motion } from "framer-motion";
import { useState } from "react";

const skills = [
  { name: "Git", image: "./src/assets/git_logo.png", bg: "from-orange-500 to-red-600" },
  { name: "Javascript", image: "./src/assets/js_logo.png", bg: "from-yellow-400 to-orange-500" },
  { name: "React", image: "./src/assets/react_logo.png", bg: "from-blue-400 to-cyan-500" },
  { name: "GSAP", image: "./src/assets/gsap.png", bg: "from-green-400 to-emerald-600" },
  { name: "Three.js", image: "./src/assets/threejs.png", bg: "from-purple-400 to-indigo-600" },
];

export default function HeroSkills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto mb-12 px-4" 
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="relative group" 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            delay: 0.4 + index * 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          onHoverStart={() => setHoveredSkill(skill.name)}
          onHoverEnd={() => setHoveredSkill(null)}
        >
          
          <div className="skill-pill cursor-pointer relative z-20"> 
            {skill.name}
          </div>

          
          <motion.div
            className="absolute -top-44 left-1/2 -translate-x-1/2 pointer-events-none z-10 origin-bottom"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{
              opacity: hoveredSkill === skill.name ? 1 : 0,
              y: hoveredSkill === skill.name ? -30 : 20, 
              scale: hoveredSkill === skill.name ? 1 : 0.95
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className={`p-4 rounded-2xl shadow-2xl bg-gradient-to-br ${skill.bg} backdrop-blur-lg border-2 border-white/20`}>
              <div className="w-40 h-40 flex items-center justify-center p-3 bg-white/10 rounded-xl">
                <img 
                  src={skill.image}
                  alt={skill.name}
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}