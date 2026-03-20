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

const deviceTypes = [
  { value: "", label: "Select device type" },
  { value: "macbook", label: "MacBook" },
  { value: "iphone", label: "iPhone" },
  { value: "ipad", label: "iPad" },
  { value: "apple-watch", label: "Apple Watch" },
];

const macbookModels = [
  { value: "", label: "Select model" },
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
  { value: "", label: "Select model" },
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
  { value: "", label: "Select storage" },
  { value: "128gb", label: "128GB" },
  { value: "256gb", label: "256GB" },
  { value: "512gb", label: "512GB" },
  { value: "1tb", label: "1TB" },
  { value: "2tb", label: "2TB" },
];

const conditionOptions = [
  { value: "", label: "Select condition" },
  { value: "like-new", label: "Like New - No visible scratches" },
  { value: "good", label: "Good - Minor scratches visible" },
  { value: "fair", label: "Fair - Visible wear and scratches" },
  { value: "poor", label: "Poor - Heavy wear or damage" },
];

const accessoryOptions = [
  "Original Box",
  "Charging Cable",
  "Charger",
  "Original EarPods",
  "Case/Cover",
];

export default function DeviceFormPage() {
  const [formData, setFormData] = useState({
    deviceType: "",
    model: "",
    storage: "",
    condition: "",
    batteryHealth: "",
    accessories: [] as string[],
    notes: "",
  });

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
        return [{ value: "", label: "Coming soon" }];
      case "apple-watch":
        return [{ value: "", label: "Coming soon" }];
      default:
        return [{ value: "", label: "Select device type first" }];
    }
  };

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <h1 className="text-3xl md:text-4xl font-semibold text-[var(--text-primary)] mb-2">
              Device Details
            </h1>
            <p className="text-[var(--text-secondary)] mb-10">
              Tell us about the device you want to sell.
            </p>

            <StepIndicator 
              currentStep={2} 
              steps={["Device Type", "Details", "Review"]} 
            />

            <Card variant="bordered" className="p-8">
              <div className="space-y-8">
                <Select
                  label="Device Type"
                  id="deviceType"
                  options={deviceTypes}
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
                      options={getModels()}
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
                      label="Storage"
                      id="storage"
                      options={storageOptions}
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
                    className="space-y-6"
                  >
                    <Select
                      label="Condition"
                      id="condition"
                      options={conditionOptions}
                      value={formData.condition}
                      onChange={(e) => updateField("condition", e.target.value)}
                    />

                    <Input
                      label="Battery Health (%)"
                      id="batteryHealth"
                      type="number"
                      min="0"
                      max="100"
                      placeholder="e.g. 85"
                      value={formData.batteryHealth}
                      onChange={(e) => updateField("batteryHealth", e.target.value)}
                    />

                    <div>
                      <label className="block text-sm text-[var(--text-secondary)] mb-3 font-medium">
                        Included Accessories
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                      label="Additional Notes"
                      id="notes"
                      placeholder="Any additional information about your device..."
                      value={formData.notes}
                      onChange={(e) => updateField("notes", e.target.value)}
                      rows={4}
                    />
                  </motion.div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-10 pt-8 border-t border-[var(--border)]">
                <Link href="/">
                  <Button variant="ghost" size="md">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                </Link>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="secondary" size="md">
                    <Save className="w-4 h-4 mr-2" />
                    Save Draft
                  </Button>
                  <Link href="/summary">
                    <Button size="md">
                      Check Offer
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
