"use client";

import Link from "next/link";
import { Smartphone, Mail, Shield, Star } from "lucide-react";
import { useTranslation } from "@/i18n";

export default function Footer() {
  const { t } = useTranslation();
  const startYear = 2026;
  const currentYear = new Date().getFullYear();
  
  const copyrightText = currentYear === startYear 
    ? `© ${startYear}` 
    : `© ${startYear}–${currentYear}`;

  return (
    <footer className="bg-[var(--surface)] border-t border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[var(--accent)] flex items-center justify-center">
                <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--background)]" />
              </div>
              <span className="text-base sm:text-xl font-semibold text-[var(--text-primary)]">
                Demo-Rebuy
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] mb-3 sm:mb-4 uppercase tracking-wider">
              {t.footer.service}
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="#" className="text-xs sm:text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                  {t.footer.howItWorks}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs sm:text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                  {t.nav.devicesWeBuy}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs sm:text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                  {t.footer.pricing}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] mb-3 sm:mb-4 uppercase tracking-wider">
              {t.footer.company}
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="#" className="text-xs sm:text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                  {t.footer.aboutUs}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs sm:text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                  {t.footer.contact}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-xs sm:text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                  {t.footer.privacyPolicy}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] mb-3 sm:mb-4 uppercase tracking-wider">
              {t.footer.contact}
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="truncate">supachai.uthawisan@gmail.com</span>
              </li>
              <li className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>{t.footer.secure}</span>
              </li>
              <li className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span>{t.footer.rating}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-[var(--border)]">
          <p className="text-center text-xs sm:text-sm text-[var(--text-muted)]">
            {copyrightText} TryCatchr Tech. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
