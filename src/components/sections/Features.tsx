"use client";

import { motion } from "framer-motion";
import { Shield, Zap, DollarSign } from "lucide-react";
import { useTranslation } from "@/i18n";

export default function Features() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Shield,
      title: t.features.secure.title,
      description: t.features.secure.description,
    },
    {
      icon: Zap,
      title: t.features.fast.title,
      description: t.features.fast.description,
    },
    {
      icon: DollarSign,
      title: t.features.bestPrice.title,
      description: t.features.bestPrice.description,
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-[var(--surface)] border-y border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--text-primary)] mb-3 sm:mb-4 tracking-tight">
            {t.features.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
            {t.features.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border)]"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-[var(--accent-subtle)] flex items-center justify-center mb-4 sm:mb-6">
                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[var(--accent)]" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
