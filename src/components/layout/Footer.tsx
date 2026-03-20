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
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent)] flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-[var(--background)]" />
              </div>
              <span className="text-xl font-semibold text-[var(--text-primary)]">
                Demo-Rebuy
              </span>
            </Link>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-4 uppercase tracking-wider">
              {t.footer.service}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                  {t.footer.howItWorks}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                  {t.nav.devicesWeBuy}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                  {t.footer.pricing}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-4 uppercase tracking-wider">
              {t.footer.company}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                  {t.footer.aboutUs}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                  {t.footer.contact}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
                  {t.footer.privacyPolicy}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-4 uppercase tracking-wider">
              {t.footer.contact}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <Mail className="w-4 h-4" />
                supachai.uthawisan@gmail.com
              </li>
              <li className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <Shield className="w-4 h-4" />
                {t.footer.secure}
              </li>
              <li className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <Star className="w-4 h-4" />
                {t.footer.rating}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border)]">
          <p className="text-center text-sm text-[var(--text-muted)]">
            {copyrightText} TryCatchr Tech. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
