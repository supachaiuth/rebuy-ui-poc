"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-xl border-b border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[var(--accent)] flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-[var(--background)]" />
            </div>
            <span className="text-xl font-semibold text-[var(--text-primary)] tracking-tight">
              Demo-Rebuy-K.One
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="#" 
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              How It Works
            </Link>
            <Link 
              href="#" 
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              Devices We Buy
            </Link>
            <Link 
              href="#" 
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              FAQ
            </Link>
          </div>

          <Link href="/device-form">
            <Button size="sm">Get an Offer</Button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
