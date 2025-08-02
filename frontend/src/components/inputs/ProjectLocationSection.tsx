import type { FunctionalComponent } from "preact";
import type { SolarFormData } from "../../types/SolarFormData";
import {
  validateSingleField,
  type ValidationErrors,
} from "../../utils/validateFormData";

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

    const error = validateSingleField(name as keyof SolarFormData, value);
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

      <label>
        Zip Code:
        <input
          type="text"
          name="zip"
          value={formData.zip}
          onInput={handleChange}
          required
        />
        {errors.zip && <span className="error">{errors.zip}</span>}
      </label>

      <label>
        Monthly Electric Bill ($):
        <input
          type="number"
          name="monthlyBill"
          value={formData.monthlyBill}
          onInput={handleChange}
          required
        />
        {errors.monthlyBill && (
          <span className="error">{errors.monthlyBill}</span>
        )}
      </label>
    </fieldset>
  );
};
