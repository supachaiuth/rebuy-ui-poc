"use client";

import { SelectHTMLAttributes, forwardRef } from "react";
import { ChevronDown } from "lucide-react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = "", label, error, id, options, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={id} 
            className="block text-sm text-[var(--text-secondary)] mb-2 font-medium"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={id}
            className={`
              w-full px-4 py-3 
              bg-[var(--surface)] 
              border border-[var(--border)] 
              rounded-lg 
              text-[var(--text-primary)]
              appearance-none
              cursor-pointer
              transition-all duration-300
              focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent-subtle)]
              ${error ? "border-[var(--error)]" : ""}
              ${className}
            `}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown 
            className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)] pointer-events-none" 
          />
        </div>
        {error && (
          <p className="mt-2 text-sm text-[var(--error)]">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
