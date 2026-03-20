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
      
      <div className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              href="/device-form" 
              className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.summary.backToDetails}
            </Link>

            <h1 className="text-3xl md:text-4xl font-semibold text-[var(--text-primary)] mb-2">
              {t.summary.title}
            </h1>
            <p className="text-[var(--text-secondary)] mb-10">
              {t.summary.subtitle}
            </p>

            <StepIndicator 
              currentStep={3} 
              steps={[t.deviceForm.step1, t.deviceForm.step2, t.deviceForm.step3]} 
            />

            <div className="space-y-6">
              <Card variant="bordered" className="p-8">
                <div className="flex items-start gap-6">
                  <div className="relative w-32 h-32 rounded-xl overflow-hidden bg-[var(--surface)] flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop"
                      alt={mockData.deviceType}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-1">
                      {mockData.deviceType}
                    </h2>
                    <p className="text-[var(--text-secondary)] mb-4">
                      {mockData.model}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="accent">{mockData.storage}</Badge>
                      <Badge variant={conditionBadgeVariant(mockData.condition)}>
                        {mockData.condition}
                      </Badge>
                    </div>
                  </div>
                </div>
              </Card>

              <Card variant="bordered" className="p-8">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6">
                  {t.summary.conditionDetails}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <span className="text-sm text-[var(--text-muted)]">{t.summary.batteryHealth}</span>
                    <p className="text-[var(--text-primary)] font-medium mt-1">
                      {mockData.batteryHealth}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm text-[var(--text-muted)]">{t.summary.storage}</span>
                    <p className="text-[var(--text-primary)] font-medium mt-1">
                      {mockData.storage}
                    </p>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-sm text-[var(--text-muted)]">{t.summary.includedAccessories}</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {mockData.accessories.map((acc) => (
                        <Badge key={acc} variant="default">{acc}</Badge>
                      ))}
                    </div>
                  </div>
                  {mockData.notes && (
                    <div className="sm:col-span-2">
                      <span className="text-sm text-[var(--text-muted)]">{t.summary.notes}</span>
                      <p className="text-[var(--text-secondary)] mt-1">
                        {mockData.notes}
                      </p>
                    </div>
                  )}
                </div>
              </Card>

              <Card variant="bordered" className="p-8 bg-gradient-to-br from-[var(--surface)] to-[var(--surface-elevated)]">
                <div className="text-center">
                  <span className="text-sm text-[var(--text-secondary)] uppercase tracking-wider">
                    {t.summary.estimatedOffer}
                  </span>
                  <div className="text-5xl md:text-6xl font-semibold text-[var(--accent)] mt-4 mb-4">
                    ฿48,500
                  </div>
                  <p className="text-sm text-[var(--text-muted)] max-w-md mx-auto">
                    {t.summary.offerDisclaimer}
                  </p>
                </div>
              </Card>

              <div className="flex items-center justify-center gap-6 py-4 text-sm text-[var(--text-secondary)]">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[var(--accent)]" />
                  <span>{t.summary.secureTransaction}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[var(--accent)]" />
                  <span>{t.summary.fastPayment}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-8 border-t border-[var(--border)]">
                <Link href="/device-form">
                  <Button variant="secondary" size="md">
                    <Edit3 className="w-4 h-4 mr-2" />
                    {t.summary.editDetails}
                  </Button>
                </Link>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/">
                    <Button variant="ghost" size="md">
                      <RefreshCw className="w-4 h-4 mr-2" />
                      {t.summary.startOver}
                    </Button>
                  </Link>
                  <Button size="md" className="group">
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
