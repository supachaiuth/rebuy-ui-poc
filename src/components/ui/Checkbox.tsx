"use client";

import { InputHTMLAttributes, forwardRef } from "react";
import { Check } from "lucide-react";

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className = "", label, id, checked, ...props }, ref) => {
    return (
      <label 
        htmlFor={id} 
        className={`
          flex items-center gap-3 cursor-pointer group
          ${className}
        `}
      >
        <div className="relative">
          <input
            ref={ref}
            type="checkbox"
            id={id}
            checked={checked}
            className="sr-only"
            {...props}
          />
          <div className={`
            w-5 h-5 rounded border-2 transition-all duration-200
            flex items-center justify-center
            ${checked 
              ? "bg-[var(--accent)] border-[var(--accent)]" 
              : "bg-transparent border-[var(--border)] group-hover:border-[var(--accent)]"
            }
          `}>
            {checked && <Check className="w-3 h-3 text-[var(--background)]" strokeWidth={3} />}
          </div>
        </div>
        <span className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
          {label}
        </span>
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
