"use client";

import { HTMLAttributes, forwardRef } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "error" | "accent";
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className = "", variant = "default", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center px-3 py-1 text-xs font-medium rounded-full";
    
    const variants = {
      default: "bg-[var(--surface-elevated)] text-[var(--text-secondary)] border border-[var(--border)]",
      success: "bg-[rgba(124,184,124,0.15)] text-[var(--success)] border border-[var(--success)]/30",
      warning: "bg-[rgba(212,168,90,0.15)] text-[var(--warning)] border border-[var(--warning)]/30",
      error: "bg-[rgba(196,124,124,0.15)] text-[var(--error)] border border-[var(--error)]/30",
      accent: "bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--accent)]/30",
    };

    return (
      <span
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export default Badge;
