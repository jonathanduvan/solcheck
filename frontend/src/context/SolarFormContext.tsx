import { createContext } from "preact";
import { useContext, useState } from "preact/hooks";
import {
  validateFormData,
  type ValidationErrors,
} from "../utils/validateFormData";
import type { SolarFormData } from "../types/SolarFormData";
import { validateField } from "../utils/validateFormData";

import { initialFormData } from "../constants/initialFormData";

type FormContextType = {
  formData: SolarFormData;
  errors: ValidationErrors;
  setField: (key: keyof SolarFormData, value: string) => void;
  validate: () => boolean;
};

const SolarFormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({
  children,
}: {
  children: preact.ComponentChildren;
}) {
  const [formData, setFormData] = useState<SolarFormData>(initialFormData);
  const [errors, setErrors] = useState<ValidationErrors>({});

  function setField(key: keyof SolarFormData, value: string) {
    setFormData((prev) => ({ ...prev, [key]: value }));
    const newError = validateField(key, value);
    setErrors((prev) => ({ ...prev, [key]: undefined })); // clear error on change
  }

  function validate(): boolean {
    const newErrors = validateFormData(formData);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  return (
    <SolarFormContext.Provider value={{ formData, setField, errors, validate }}>
      {children}
    </SolarFormContext.Provider>
  );
}

export function useFormContext() {
  const ctx = useContext(SolarFormContext);
  if (!ctx) throw new Error("useFormContext must be used within FormProvider");
  return ctx;
}
