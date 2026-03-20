"use client";

import { useTranslation } from "@/i18n";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation();

  return (
    <div className="flex items-center rounded-lg bg-[var(--surface)] border border-[var(--border)] overflow-hidden">
      <button
        onClick={() => setLanguage("th")}
        className={`
          px-3 py-1.5 text-xs font-medium transition-all duration-200
          ${language === "th" 
            ? "bg-[var(--accent)] text-[var(--background)]" 
            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          }
        `}
      >
        TH
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`
          px-3 py-1.5 text-xs font-medium transition-all duration-200
          ${language === "en" 
            ? "bg-[var(--accent)] text-[var(--background)]" 
            : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          }
        `}
      >
        EN
      </button>
    </div>
  );
}
