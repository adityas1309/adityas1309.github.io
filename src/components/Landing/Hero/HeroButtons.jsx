import { motion } from "framer-motion";

export default function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex flex-col sm:flex-row gap-4 justify-center"
    >
      <motion.a
        href="#work"
        className="inline-flex items-center justify-center px-5 py-3 font-medium text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View Work
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </motion.a>

      <motion.a
        href="#contact"
        className="inline-flex items-center justify-center px-5 py-3 font-medium text-black bg-white hover:bg-white/90 rounded-full transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Contact Me
      </motion.a>
    </motion.div>
  );
}
