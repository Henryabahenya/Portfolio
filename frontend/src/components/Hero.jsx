import React from "react";
import { motion } from "framer-motion";
import speakingPhoto from "../assets/photo1.png";

// =============================================================================
// NESTED CASCADING ANIMATION SYSTEM — DUAL-LAYER STAGGER ENGINE
// =============================================================================
// Layer 1: Master container orchestrates base titles + paragraph (staggerChildren: 0.15s)
// Layer 2: Nested cascade for green-cyan highlighted phrase blocks (staggerChildren: 0.25s)
//          with persistent looping motion + glow aesthetics
// Viewport trigger: once: false, amount: 0.3 — re-triggers on scroll back
// =============================================================================

// --- LAYER 2 DATA: Cascading phrase blocks ---
const cascadePhrases = [
  { text: "working", emphasis: "strong" },
  { text: "at the", emphasis: "normal" },
  { text: "intersection of", emphasis: "normal" },
  { text: "Child Protection,", emphasis: "strong" },
  { text: "Climate Action,", emphasis: "strong" },
  { text: "and", emphasis: "normal" },
  { text: "Global Youth", emphasis: "strong" },
  { text: "Leadership.", emphasis: "strong" },
];

// --- LAYER 1: Master container variants ---
const masterContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// --- LAYER 1: Child item variants (titles, paragraph, social) ---
const masterChildVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

// --- LAYER 2: Nested cascade container for highlighted phrases ---
const nestedCascadeContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.45,
      delayChildren: 0.3,
    },
  },
};

// --- LAYER 2: Individual phrase word entry variant ---
const phraseWordVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.85,
    filter: "blur(6px)",
  },
  visible: (index) => ({
    opacity: 1,
    y: [0, -6, 0],
    scale: 1,
    filter: "blur(0px)",
    transition: {
      opacity: { duration: 0.6, ease: "easeOut" },
      scale: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
      filter: { duration: 0.6, ease: "easeOut" },
      y: {
        repeat: Infinity,
        duration: 2.8,
        ease: "easeInOut",
        delay: index * 0.12,
      },
    },
  }),
};

// --- Glow styles — uniformly green (emerald only, no cyan/blue) ---
const glowStyle = (emphasis) =>
  emphasis === "strong"
    ? {
        textShadow:
          "0 0 18px rgba(52, 211, 153, 0.7), 0 0 44px rgba(16, 185, 129, 0.4), 0 0 80px rgba(52, 211, 153, 0.15)",
      }
    : {
        textShadow:
          "0 0 10px rgba(52, 211, 153, 0.5), 0 0 28px rgba(16, 185, 129, 0.3)",
      };

export default function Hero() {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* ─── Left Column — Animated Content ─── */}
        <motion.div
          variants={masterContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* LAYER 1 — Title block */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight md:leading-none mb-6"
            variants={masterChildVariants}
          >
            Social Entrepreneur &amp; Policy Advocate
          </motion.h1>

          {/* LAYER 2 — Nested cascade phrase block */}
          <motion.div
            className="mb-8"
            variants={nestedCascadeContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <span className="sr-only">
              working at the intersection of Child Protection, Climate Action,
              and Global Youth Leadership.
            </span>
            <div className="flex flex-wrap items-baseline gap-x-[0.35em] gap-y-1 text-3xl md:text-4xl lg:text-5xl leading-snug">
              {cascadePhrases.map((phrase, index) => (
                <motion.span
                  key={index}
                  className={`inline-block ${
                    phrase.emphasis === "strong"
                      ? "font-extrabold text-emerald-400"
                      : "font-bold text-emerald-300"
                  }`}
                  custom={index}
                  variants={phraseWordVariants}
                  style={glowStyle(phrase.emphasis)}
                  aria-hidden="true"
                >
                  {phrase.text}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* LAYER 1 — Description paragraph */}
          <motion.p
            className="text-lg text-slate-400 leading-relaxed max-w-xl mb-0"
            variants={masterChildVariants}
          >
            Driving measurable impact through strategic partnerships with{" "}
            <a
              href="https://www.unicef.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-cyan-400 hover:underline transition-opacity hover:opacity-80"
            >
              UNICEF
            </a>
            ,{" "}
            <a
              href="https://yalinetwork.state.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-yellow-400 hover:underline transition-opacity hover:opacity-80"
            >
              YALI
            </a>
            , and{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-500 hover:underline transition-opacity hover:opacity-80"
            >
              MYCP
            </a>{" "}
            &mdash; building scalable programs that empower communities and
            influence policy across Sub-Saharan Africa.
          </motion.p>

          {/* LAYER 1 — Social Links */}
          <motion.div
            className="flex items-center gap-4 mt-8"
            variants={masterChildVariants}
          >
            <a
              href="https://www.instagram.com/espy_stark?igsh=MTFhdGtnb2tpOTI0Zw=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-sm"
            >
              <svg
                className="w-5 h-5 block shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              <span>Instagram</span>
            </a>

            <a
              href="https://www.facebook.com/EspoirKaposho?mibextid=rS40aB7S9Ucbxw6v"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm"
            >
              <svg
                className="w-5 h-5 block shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Facebook</span>
            </a>
          </motion.div>
        </motion.div>

        {/* ─── Right Column — Speaker Photo ─── */}
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="relative w-full min-h-[550px] md:min-h-[640px]">
            <img
              src={speakingPhoto}
              alt="Espoir speaking at the Hamburg Sustainability Conference"
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
