"use client";

import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", label, error, id, ...props }, ref) => {
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
        <input
          ref={ref}
          id={id}
          className={`
            w-full px-4 py-3 
            bg-[var(--surface)] 
            border border-[var(--border)] 
            rounded-lg 
            text-[var(--text-primary)] 
            placeholder:text-[var(--text-muted)]
            transition-all duration-300
            focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent-subtle)]
            ${error ? "border-[var(--error)]" : ""}
            ${className}
          `}
          {...props}
        />
        {error && (
          <p className="mt-2 text-sm text-[var(--error)]">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
