"use client";

import { motion } from "framer-motion";
import { Users, Clock, Star } from "lucide-react";
import { useTranslation } from "@/i18n";

export default function TrustStats() {
  const { t } = useTranslation();

  const stats = [
    {
      icon: Users,
      value: "50K+",
      label: t.trustStats.devicesProcessed,
    },
    {
      icon: Clock,
      value: "24h",
      label: t.trustStats.averagePayoutTime,
    },
    {
      icon: Star,
      value: "4.9",
      label: t.trustStats.customerRating,
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[var(--surface)] border-y border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4 sm:gap-6 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border)]"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-[var(--accent-subtle)] flex items-center justify-center flex-shrink-0">
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--accent)]" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-semibold text-[var(--text-primary)]">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-[var(--text-secondary)]">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
