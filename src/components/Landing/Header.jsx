import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-12 ${
        scrolled ? "backdrop-blur-xl bg-black/30 shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        
        <motion.a
          href="#"
          className="text-xl font-display font-bold text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Aditya Singh
        </motion.a>

        
        <ul className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.6 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <a
                href={item.href}
                className="text-white/70 hover:text-white text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>

        
        <motion.button
          className="hidden md:flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1 }}
        >
          Let's Connect
        </motion.button>

        
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </nav>

      
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-16 left-0 w-full bg-black/90 backdrop-blur-lg p-6 flex flex-col space-y-4 items-center text-white md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lg font-medium transition-colors hover:text-gray-300"
                onClick={() => setMenuOpen(false)} 
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
