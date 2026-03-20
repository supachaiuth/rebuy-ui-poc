"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Menu, X } from "lucide-react";
import Button from "../ui/Button";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "@/i18n";

export default function Navbar() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "#", label: t.nav.howItWorks },
    { href: "#", label: t.nav.devicesWeBuy },
    { href: "#", label: t.nav.faq },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--border-subtle)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[var(--accent)] flex items-center justify-center">
                <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--background)]" />
              </div>
              <span className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] tracking-tight">
                Demo-Rebuy
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.label}
                  href={link.href} 
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <LanguageSwitcher />
              <Link href="/device-form">
                <Button size="sm">{t.nav.getOffer}</Button>
              </Link>
            </div>

            <div className="flex md:hidden items-center gap-3">
              <LanguageSwitcher />
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg hover:bg-[var(--surface)] transition-colors"
                aria-label="Toggle menu"
              >
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6 text-[var(--text-primary)]" />
                  ) : (
                    <Menu className="w-6 h-6 text-[var(--text-primary)]" />
                  )}
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={closeMobileMenu}
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 sm:w-80 bg-[var(--surface)]/95 backdrop-blur-xl z-50 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-lg font-semibold text-[var(--text-primary)]">
                    Menu
                  </span>
                  <button
                    onClick={closeMobileMenu}
                    className="p-2 rounded-lg hover:bg-[var(--surface-elevated)] transition-colors"
                  >
                    <X className="w-5 h-5 text-[var(--text-primary)]" />
                  </button>
                </div>

                <nav className="flex-1 space-y-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="block px-4 py-3 text-base text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-elevated)] rounded-lg transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="pt-6 border-t border-[var(--border)]">
                  <Link href="/device-form" onClick={closeMobileMenu}>
                    <Button size="lg" className="w-full">
                      {t.nav.getOffer}
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
