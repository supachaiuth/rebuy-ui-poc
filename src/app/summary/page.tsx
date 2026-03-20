"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Edit3, RefreshCw, CheckCircle, Shield, Zap } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import StepIndicator from "@/components/form/StepIndicator";
import { useTranslation } from "@/i18n";

const mockData = {
  deviceType: "MacBook",
  model: "MacBook Pro 14\" (2023)",
  storage: "512GB",
  condition: "Good",
  batteryHealth: "92%",
  accessories: ["Original Box", "Charging Cable", "Charger"],
  notes: "Minor scratches on the bottom case, screen is pristine.",
};

const conditionBadgeVariant = (condition: string) => {
  switch (condition) {
    case "Like New":
      return "success";
    case "Good":
      return "accent";
    case "Fair":
      return "warning";
    case "Poor":
      return "error";
    default:
      return "default";
  }
};

export default function SummaryPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Navbar />
      
      <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              href="/device-form" 
              className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors mb-6 sm:mb-8"
            >
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              {t.summary.backToDetails}
            </Link>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[var(--text-primary)] mb-1.5 sm:mb-2">
              {t.summary.title}
            </h1>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-8 sm:mb-10">
              {t.summary.subtitle}
            </p>

            <StepIndicator 
              currentStep={3} 
              steps={[t.deviceForm.step1, t.deviceForm.step2, t.deviceForm.step3]} 
            />

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <Card variant="bordered" className="p-4 sm:p-5 md:p-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6">
                  <div className="relative w-28 h-28 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-xl overflow-hidden bg-[var(--surface)] flex-shrink-0 mx-auto sm:mx-0">
                    <Image
                      src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop"
                      alt={mockData.deviceType}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 w-full text-center sm:text-left">
                    <h2 className="text-xl sm:text-2xl font-semibold text-[var(--text-primary)] mb-1">
                      {mockData.deviceType}
                    </h2>
                    <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-3 sm:mb-4">
                      {mockData.model}
                    </p>
                    <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                      <Badge variant="accent">{mockData.storage}</Badge>
                      <Badge variant={conditionBadgeVariant(mockData.condition)}>
                        {mockData.condition}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>

              <Card variant="bordered" className="p-4 sm:p-5 md:p-8">
                <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] mb-4 sm:mb-5 md:mb-6">
                  {t.summary.conditionDetails}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  <div>
                    <span className="text-xs sm:text-sm text-[var(--text-muted)]">{t.summary.batteryHealth}</span>
                    <p className="text-sm sm:text-base text-[var(--text-primary)] font-medium mt-0.5 sm:mt-1">
                      {mockData.batteryHealth}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm text-[var(--text-muted)]">{t.summary.storage}</span>
                    <p className="text-sm sm:text-base text-[var(--text-primary)] font-medium mt-0.5 sm:mt-1">
                      {mockData.storage}
                    </p>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-xs sm:text-sm text-[var(--text-muted)]">{t.summary.includedAccessories}</span>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-1.5 sm:mt-2">
                      {mockData.accessories.map((acc) => (
                        <Badge key={acc} variant="default">{acc}</Badge>
                      ))}
                    </div>
                  </div>
                  {mockData.notes && (
                    <div className="sm:col-span-2">
                      <span className="text-xs sm:text-sm text-[var(--text-muted)]">{t.summary.notes}</span>
                      <p className="text-sm sm:text-base text-[var(--text-secondary)] mt-1">
                        {mockData.notes}
                      </p>
                    </div>
                  )}
                </div>
              </Card>

              <Card variant="bordered" className="p-5 sm:p-6 md:p-8 bg-gradient-to-br from-[var(--surface)] to-[var(--surface-elevated)]">
                <div className="text-center">
                  <span className="text-xs sm:text-sm text-[var(--text-secondary)] uppercase tracking-wider">
                    {t.summary.estimatedOffer}
                  </span>
                  <div className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[var(--accent)] mt-3 sm:mt-4 mb-3 sm:mb-4">
                    ฿48,500
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-md mx-auto">
                    {t.summary.offerDisclaimer}
                  </p>
                </div>
              </Card>

              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-3 sm:py-4 text-xs sm:text-sm text-[var(--text-secondary)]">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--accent)]" />
                  <span>{t.summary.secureTransaction}</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--accent)]" />
                  <span>{t.summary.fastPayment}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 pt-5 sm:pt-6 md:pt-8 border-t border-[var(--border)]">
                <Link href="/device-form" className="sm:order-1 order-2">
                  <Button variant="secondary" size="md" className="w-full sm:w-auto">
                    <Edit3 className="w-4 h-4 mr-2" />
                    {t.summary.editDetails}
                  </Button>
                </Link>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto order-1 sm:order-2">
                  <Link href="/" className="sm:order-2 order-1">
                    <Button variant="ghost" size="md" className="w-full sm:w-auto">
                      <RefreshCw className="w-4 h-4 mr-2" />
                      {t.summary.startOver}
                    </Button>
                  </Link>
                  <Button size="md" className="w-full sm:w-auto group order-0 sm:order-1">
                    <CheckCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    {t.summary.submitRequest}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
