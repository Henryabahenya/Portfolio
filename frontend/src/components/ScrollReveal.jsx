import React from "react";
import { motion } from "framer-motion";

export default function ScrollReveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 1.2, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
