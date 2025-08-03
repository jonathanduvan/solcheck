// src/components/shared/LabeledSelect.tsx
import type { FunctionalComponent } from "preact";

interface LabeledSelectProps {
  label: string;
  name: string;
  value: string;
  required?: boolean;
  error?: string;
  onChange: (e: Event) => void;
  children: preact.ComponentChildren;
}

export const LabeledSelect: FunctionalComponent<LabeledSelectProps> = ({
  label,
  name,
  value,
  required = false,
  error,
  onChange,
  children,
}) => {
  const id = name;
  return (
    <div className="field">
      <label htmlFor={id} className="label">
        {label}
      </label>
      <div className="input-wrapper">
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`input ${error ? "input--error" : ""}`}
        >
          {children}
        </select>
        {error && (
          <span role="alert" id={`${id}-error`} className="error">
            {error}
          </span>
        )}
      </div>
    </div>
  );
};
