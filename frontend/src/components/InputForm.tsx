import { useFormData } from "../hooks/useFormData";
import { ProjectLocationSection } from "./inputs/ProjectLocationSection";
import { SystemBasicsSection } from "./inputs/SystemBasicsSection";
import { ArraySetupSection } from "./inputs/ArraySetupSection";
import { InverterSetupSection } from "./inputs/InverterSetupSection";
import { ShadingSection } from "./inputs/ShadingSection";
import { BatterySection } from "./inputs/BatterySection";

import {
  validateFormData,
  type ValidationErrors,
} from "../utils/validateFormData";

import styles from "./InputForm.module.css";
import { useState } from "preact/hooks";

export function InputForm() {
  const { formData, setFormData } = useFormData();
  const [errors, setErrors] = useState<ValidationErrors>({});

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const newErrors = validateFormData(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Proceed to submit or route to results
      console.log("Form is valid. Submitting...");
      // TODO: Collect form data and trigger solar potential calculation
      //     const response = await fetch("/api/estimate", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });
      // const result = await response.json();
      alert("Form submitted. Calculation coming soon!");
    } else {
      console.warn("Validation failed", newErrors);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <ProjectLocationSection
        formData={formData}
        setFormData={setFormData}
        errors={errors}
      />
      <SystemBasicsSection
        formData={formData}
        setFormData={setFormData}
        errors={errors}
      />
      <ArraySetupSection
        formData={formData}
        setFormData={setFormData}
        errors={errors}
      />
      <InverterSetupSection
        formData={formData}
        setFormData={setFormData}
        errors={errors}
      />
      <ShadingSection
        formData={formData}
        setFormData={setFormData}
        errors={errors}
      />
      <BatterySection
        formData={formData}
        setFormData={setFormData}
        errors={errors}
      />

      <button type="submit" className={styles.button}>
        Check My Solar Potential
      </button>
    </form>
  );
}
