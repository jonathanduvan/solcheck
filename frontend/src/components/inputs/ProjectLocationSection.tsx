import type { FunctionalComponent } from "preact";
import type { SolarFormData } from "../../types/SolarFormData";
import {
  validateField,
  type ValidationErrors,
} from "../../utils/validateFormData";
import { LabeledField } from "../shared/LabeledField";

interface Props {
  formData: SolarFormData;
  setFormData: (data: SolarFormData) => void;
  errors: ValidationErrors;
}

export const ProjectLocationSection: FunctionalComponent<Props> = ({
  formData,
  setFormData,
  errors,
}) => {
  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;

    const error = validateField(name as keyof SolarFormData, value);
    if (error) {
      // optional: show inline, but don't set state here unless managing per-field errors
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <fieldset className="form-section">
      <legend>📍 Project Location</legend>
      <div className="columns">
        <LabeledField
          label="Zip Code"
          name="zip"
          type="text"
          value={formData.zip}
          required
          error={errors.zip}
          onChange={handleChange}
        />
        <LabeledField
          label="Monthly Electric Bill ($)"
          name="monthlyBill"
          type="number"
          value={formData.monthlyBill}
          required
          error={errors.monthlyBill}
          onChange={handleChange}
        />
      </div>
    </fieldset>
  );
};
