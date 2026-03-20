"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Card from "../ui/Card";
import { useTranslation } from "@/i18n";

const devices = [
  {
    name: "MacBook",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=400&fit=crop",
    description: "Pro, Air, Retina",
  },
  {
    name: "iPhone",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=400&fit=crop",
    description: "All models, any generation",
  },
  {
    name: "iPad",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=400&fit=crop",
    description: "Pro, Air, Mini, Standard",
  },
  {
    name: "Apple Watch",
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&h=400&fit=crop",
    description: "Series, Ultra, SE",
  },
];

export default function DeviceGrid() {
  const { t } = useTranslation();

  return (
    <section id="devices" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--text-primary)] mb-3 sm:mb-4 tracking-tight">
            {t.deviceGrid.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] max-w-xl mx-auto px-2">
            {t.deviceGrid.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {devices.map((device, index) => (
            <motion.div
              key={device.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href="/device-form">
                <Card hover className="group">
                  <div className="relative aspect-square overflow-hidden bg-[var(--surface)]">
                    <Image
                      src={device.image}
                      alt={device.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent opacity-60" />
                  </div>
                  <div className="p-4 sm:p-5 md:p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] mb-0.5 sm:mb-1">
                          {device.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                          {device.description}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--accent)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
