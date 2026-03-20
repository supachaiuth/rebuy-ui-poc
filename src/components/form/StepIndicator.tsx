"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
  steps: string[];
}

export default function StepIndicator({ currentStep, steps }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-2 mb-12">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          <div className="flex flex-col items-center">
            <motion.div
              initial={false}
              animate={{
                backgroundColor: index + 1 <= currentStep 
                  ? "var(--accent)" 
                  : "var(--surface)",
                borderColor: index + 1 <= currentStep 
                  ? "var(--accent)" 
                  : "var(--border)",
              }}
              className={`
                w-10 h-10 rounded-full border-2 flex items-center justify-center
                transition-colors duration-300
                ${index + 1 < currentStep ? "text-[var(--background)]" : ""}
                ${index + 1 === currentStep ? "text-[var(--background)]" : ""}
                ${index + 1 > currentStep ? "text-[var(--text-muted)]" : ""}
              `}
            >
              {index + 1 < currentStep ? (
                <Check className="w-5 h-5" />
              ) : (
                <span className="text-sm font-medium">{index + 1}</span>
              )}
            </motion.div>
            <span className={`
              mt-2 text-xs hidden sm:block
              ${index + 1 === currentStep ? "text-[var(--accent)]" : "text-[var(--text-muted)]"}
            `}>
              {step}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div className={`
              w-12 sm:w-20 h-0.5 mx-2
              ${index + 1 < currentStep ? "bg-[var(--accent)]" : "bg-[var(--border)]"}
              transition-colors duration-300
            `} />
          )}
        </div>
      ))}
    </div>
  );
}
