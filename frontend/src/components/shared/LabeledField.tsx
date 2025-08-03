import type { FunctionalComponent } from "preact";
import { useId } from "preact/hooks";
import type { SolarFormData } from "../../types/SolarFormData";

interface LabeledFieldProps {
  label: string;
  name: keyof SolarFormData;
  type: string;
  value: string | number;
  required?: boolean;
  error?: string;
  onChange: (e: Event) => void;
}

export const LabeledField: FunctionalComponent<LabeledFieldProps> = ({
  label,
  name,
  type,
  value,
  required = false,
  error,
  onChange,
}) => {
  const id = useId(); // stable unique id per instance

  return (
    <div className="field">
      <label htmlFor={id} className="label">
        {label}
      </label>
      <div className="input-wrapper">
        <input
          id={id}
          name={name as string}
          type={type}
          value={value as any}
          onInput={onChange}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`input ${error ? "input--error" : ""}`}
        />
        {error && (
          <span role="alert" id={`${id}-error`} className="error">
            {error}
          </span>
        )}
      </div>
    </div>
  );
};
