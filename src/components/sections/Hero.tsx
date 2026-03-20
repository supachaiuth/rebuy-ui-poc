"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Button from "../ui/Button";
import { useTranslation } from "@/i18n";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[var(--background)] to-[var(--surface)]" />
      
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[var(--accent)] rounded-full blur-[120px] sm:blur-[150px] opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-56 sm:w-64 md:w-80 h-56 sm:h-64 md:h-80 bg-[var(--accent)] rounded-full blur-[100px] sm:blur-[120px] opacity-15" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[var(--surface)] border border-[var(--border)] mb-6 sm:mb-8">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--accent)]" />
            <span className="text-xs sm:text-sm text-[var(--text-secondary)]">{t.hero.badge}</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold text-[var(--text-primary)] tracking-tight leading-tight mb-6 sm:mb-8"
        >
          {t.hero.title}
          <br />
          <span className="text-[var(--accent)]">{t.hero.titleAccent}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-[var(--text-secondary)] max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed px-2"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <Link href="/device-form">
            <Button size="lg" className="group w-full sm:w-auto">
              {t.hero.ctaPrimary}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="#devices">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              {t.hero.ctaSecondary}
            </Button>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-[var(--border)] flex items-start justify-center p-1.5 sm:p-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[var(--accent)]"
          />
        </div>
      </motion.div>
    </section>
  );
}
