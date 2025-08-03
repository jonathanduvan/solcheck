import type { FunctionalComponent } from "preact";
import type { SolarFormData } from "../../types/SolarFormData";
import type { ValidationErrors } from "../../utils/validateFormData";
import { validateField } from "../../utils/validateFormData";
import { LabeledField } from "../shared/LabeledField";

interface Props {
  formData: SolarFormData;
  setFormData: (data: SolarFormData) => void;
  errors: ValidationErrors;
}

export const ArraySetupSection: FunctionalComponent<Props> = ({
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
      <legend>📐 Array Setup</legend>
      <div className="columns">
        <LabeledField
          label="Module Model"
          name="moduleModel"
          type="text"
          value={formData.moduleModel}
          onChange={handleChange}
          error={errors.moduleModel}
        />

        <LabeledField
          label="Module Power (W)"
          name="modulePower"
          type="number"
          value={formData.modulePower}
          onChange={handleChange}
          error={errors.modulePower}
        />

        <LabeledField
          label="Number of Modules"
          name="moduleCount"
          type="number"
          value={formData.moduleCount}
          onChange={handleChange}
          error={errors.moduleCount}
        />

        <LabeledField
          label="Azimuth (0–360°)"
          name="azimuth"
          type="number"
          value={formData.azimuth}
          onChange={handleChange}
          error={errors.azimuth}
        />

        <LabeledField
          label="Tilt (degrees)"
          name="tilt"
          type="number"
          value={formData.tilt}
          onChange={handleChange}
          error={errors.tilt}
        />
      </div>
    </fieldset>
  );
};
