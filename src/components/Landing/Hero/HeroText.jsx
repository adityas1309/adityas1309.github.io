import { motion } from "framer-motion";
import React from 'react';

export default function HeroText() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-md border border-white/20">
        Portfolio
      </span>
      

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 text-gradient"
      >
        Creative Developer & <br /> Digital Craftsman
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto"
      >
        I build exceptional digital experiences with a focus on performance, 
        animations, and cutting-edge technologies.
      </motion.p>
    </motion.div>
  );
}
