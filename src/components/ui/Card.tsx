"use client";

import { HTMLAttributes, forwardRef } from "react";
import { motion } from "framer-motion";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "bordered";
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", variant = "default", hover = false, children, ...props }, ref) => {
    const baseStyles = "rounded-xl overflow-hidden";
    
    const variants = {
      default: "bg-[var(--surface)]",
      elevated: "bg-[var(--surface-elevated)] shadow-lg",
      bordered: "bg-[var(--surface)] border border-[var(--border)]",
    };

    const hoverStyles = hover 
      ? "transition-all duration-300 hover:border-[var(--accent)] hover:shadow-xl cursor-pointer" 
      : "";

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
        {...(props as any)}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

export default Card;
