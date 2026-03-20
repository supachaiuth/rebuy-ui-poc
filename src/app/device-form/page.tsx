"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Save, Calculator } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Checkbox from "@/components/ui/Checkbox";
import Card from "@/components/ui/Card";
import StepIndicator from "@/components/form/StepIndicator";
import { useTranslation } from "@/i18n";

const deviceTypes = [
  { value: "", labelKey: "selectDeviceType" },
  { value: "macbook", label: "MacBook" },
  { value: "iphone", label: "iPhone" },
  { value: "ipad", label: "iPad" },
  { value: "apple-watch", label: "Apple Watch" },
];

const macbookModels = [
  { value: "", labelKey: "selectModel" },
  { value: "macbook-pro-16-2023", label: "MacBook Pro 16\" (2023)" },
  { value: "macbook-pro-14-2023", label: "MacBook Pro 14\" (2023)" },
  { value: "macbook-pro-16-2021", label: "MacBook Pro 16\" (2021)" },
  { value: "macbook-pro-14-2021", label: "MacBook Pro 14\" (2021)" },
  { value: "macbook-air-15-2023", label: "MacBook Air 15\" (2023)" },
  { value: "macbook-air-m2-2022", label: "MacBook Air M2 (2022)" },
  { value: "macbook-air-m1-2020", label: "MacBook Air M1 (2020)" },
  { value: "macbook-pro-13-m2-2022", label: "MacBook Pro 13\" M2 (2022)" },
];

const iphoneModels = [
  { value: "", labelKey: "selectModel" },
  { value: "iphone-15-pro-max", label: "iPhone 15 Pro Max" },
  { value: "iphone-15-pro", label: "iPhone 15 Pro" },
  { value: "iphone-15", label: "iPhone 15" },
  { value: "iphone-15-plus", label: "iPhone 15 Plus" },
  { value: "iphone-14-pro-max", label: "iPhone 14 Pro Max" },
  { value: "iphone-14-pro", label: "iPhone 14 Pro" },
  { value: "iphone-14", label: "iPhone 14" },
  { value: "iphone-14-plus", label: "iPhone 14 Plus" },
  { value: "iphone-13-pro-max", label: "iPhone 13 Pro Max" },
  { value: "iphone-13-pro", label: "iPhone 13 Pro" },
  { value: "iphone-13", label: "iPhone 13" },
];

const storageOptions = [
  { value: "", labelKey: "selectStorage" },
  { value: "128gb", label: "128GB" },
  { value: "256gb", label: "256GB" },
  { value: "512gb", label: "512GB" },
  { value: "1tb", label: "1TB" },
  { value: "2tb", label: "2TB" },
];

const accessoryOptions = [
  "Original Box",
  "Charging Cable",
  "Charger",
  "Original EarPods",
  "Case/Cover",
];

export default function DeviceFormPage() {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    deviceType: "",
    model: "",
    storage: "",
    condition: "",
    batteryHealth: "",
    accessories: [] as string[],
    notes: "",
  });

  const conditionOptions = [
    { value: "", labelKey: "selectCondition" },
    { value: "like-new", labelKey: "conditionLikeNew" },
    { value: "good", labelKey: "conditionGood" },
    { value: "fair", labelKey: "conditionFair" },
    { value: "poor", labelKey: "conditionPoor" },
  ];

  const updateField = (field: string, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleAccessory = (accessory: string) => {
    setFormData((prev) => ({
      ...prev,
      accessories: prev.accessories.includes(accessory)
        ? prev.accessories.filter((a) => a !== accessory)
        : [...prev.accessories, accessory],
    }));
  };

  const getModels = () => {
    switch (formData.deviceType) {
      case "macbook":
        return macbookModels;
      case "iphone":
        return iphoneModels;
      case "ipad":
        return [{ value: "", labelKey: "comingSoon" }];
      case "apple-watch":
        return [{ value: "", labelKey: "comingSoon" }];
      default:
        return [{ value: "", labelKey: "selectDeviceTypeFirst" }];
    }
  };

  const getOptionLabel = (option: { value: string; label?: string; labelKey?: string }) => {
    if (option.labelKey) {
      return t.deviceForm[option.labelKey as keyof typeof t.deviceForm] as string;
    }
    return option.label || "";
  };

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Navbar />
      
      <div className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              href="/" 
              className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors mb-6 sm:mb-8"
            >
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              {t.deviceForm.backToHome}
            </Link>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[var(--text-primary)] mb-1.5 sm:mb-2">
              {t.deviceForm.title}
            </h1>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-8 sm:mb-10">
              {t.deviceForm.subtitle}
            </p>

            <StepIndicator 
              currentStep={2} 
              steps={[t.deviceForm.step1, t.deviceForm.step2, t.deviceForm.step3]} 
            />

            <Card variant="bordered" className="p-4 sm:p-6 md:p-8">
              <div className="space-y-5 sm:space-y-6 md:space-y-8">
                <Select
                  label={t.deviceForm.title}
                  id="deviceType"
                  options={deviceTypes.map((opt) => ({
                    value: opt.value,
                    label: opt.value === "" ? getOptionLabel(opt) : (opt.label || ""),
                  }))}
                  value={formData.deviceType}
                  onChange={(e) => {
                    updateField("deviceType", e.target.value);
                    updateField("model", "");
                  }}
                />

                {formData.deviceType && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <Select
                      label="Model"
                      id="model"
                      options={getModels().map((opt) => ({
                        value: opt.value,
                        label: opt.value === "" ? getOptionLabel(opt) : (opt.label || ""),
                      }))}
                      value={formData.model}
                      onChange={(e) => updateField("model", e.target.value)}
                    />
                  </motion.div>
                )}

                {formData.model && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <Select
                      label={t.summary.storage}
                      id="storage"
                      options={storageOptions.map((opt) => ({
                        value: opt.value,
                        label: opt.value === "" ? getOptionLabel(opt) : (opt.label || ""),
                      }))}
                      value={formData.storage}
                      onChange={(e) => updateField("storage", e.target.value)}
                    />
                  </motion.div>
                )}

                {formData.storage && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4 sm:space-y-5 md:space-y-6"
                  >
                    <Select
                      label="Condition"
                      id="condition"
                      options={conditionOptions.map((opt) => ({
                        value: opt.value,
                        label: opt.value === "" ? getOptionLabel(opt) : getOptionLabel(opt),
                      }))}
                      value={formData.condition}
                      onChange={(e) => updateField("condition", e.target.value)}
                    />

                    <Input
                      label={t.deviceForm.batteryHealth}
                      id="batteryHealth"
                      type="number"
                      min="0"
                      max="100"
                      placeholder={t.deviceForm.batteryPlaceholder}
                      value={formData.batteryHealth}
                      onChange={(e) => updateField("batteryHealth", e.target.value)}
                    />

                    <div>
                      <label className="block text-xs sm:text-sm text-[var(--text-secondary)] mb-2 sm:mb-3 font-medium">
                        {t.deviceForm.includedAccessories}
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {accessoryOptions.map((accessory) => (
                          <Checkbox
                            key={accessory}
                            id={accessory}
                            label={accessory}
                            checked={formData.accessories.includes(accessory)}
                            onChange={() => toggleAccessory(accessory)}
                          />
                        ))}
                      </div>
                    </div>

                    <Textarea
                      label={t.deviceForm.additionalNotes}
                      id="notes"
                      placeholder={t.deviceForm.notesPlaceholder}
                      value={formData.notes}
                      onChange={(e) => updateField("notes", e.target.value)}
                      rows={3}
                    />
                  </motion.div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-10 pt-5 sm:pt-6 md:pt-8 border-t border-[var(--border)]">
                <Link href="/">
                  <Button variant="ghost" size="md" className="w-full sm:w-auto">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {t.deviceForm.back}
                  </Button>
                </Link>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
                  <Button variant="secondary" size="md" className="w-full sm:w-auto">
                    <Save className="w-4 h-4 mr-2" />
                    {t.deviceForm.saveDraft}
                  </Button>
                  <Link href="/summary" className="flex-1 sm:flex-none">
                    <Button size="md" className="w-full sm:w-auto">
                      {t.deviceForm.checkOffer}
                      <Calculator className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
