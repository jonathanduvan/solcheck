// src/components/shared/ToggleField.tsx
import type { FunctionalComponent } from "preact";

interface ToggleFieldProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: Event) => void;
  error?: string;
}

export const ToggleField: FunctionalComponent<ToggleFieldProps> = ({
  label,
  name,
  checked,
  onChange,
  error,
}) => {
  const id = name; // assuming name is unique within form

  return (
    <div className="field">
      <div className="toggle-wrapper">
        <input
          id={id}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className="checkbox"
        />
        <label htmlFor={id} className="label-inline">
          {label}
        </label>
      </div>
      {error && (
        <span role="alert" id={`${id}-error`} className="error">
          {error}
        </span>
      )}
    </div>
  );
};
