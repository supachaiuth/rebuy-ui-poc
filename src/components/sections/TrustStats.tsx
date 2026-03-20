"use client";

import { motion } from "framer-motion";
import { Users, Clock, Star } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50K+",
    label: "Devices Processed",
  },
  {
    icon: Clock,
    value: "24h",
    label: "Average Payout Time",
  },
  {
    icon: Star,
    value: "4.9",
    label: "Customer Rating",
  },
];

export default function TrustStats() {
  return (
    <section className="py-24 bg-[var(--surface)] border-y border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-6 p-6 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border)]"
            >
              <div className="w-14 h-14 rounded-xl bg-[var(--accent-subtle)] flex items-center justify-center flex-shrink-0">
                <stat.icon className="w-6 h-6 text-[var(--accent)]" />
              </div>
              <div>
                <div className="text-3xl font-semibold text-[var(--text-primary)]">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--text-secondary)]">
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
