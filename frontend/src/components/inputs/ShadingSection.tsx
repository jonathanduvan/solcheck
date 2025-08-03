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

export const ShadingSection: FunctionalComponent<Props> = ({
  formData,
  setFormData,
  errors,
}) => {
  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;

    // validate if desired
    validateField(name as keyof SolarFormData, value);

    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <fieldset className="form-section">
      <legend>🌳 Shading Info</legend>
      <div className="columns">
        <LabeledField
          label="Shading Description"
          name="shadingDesc"
          type="text"
          value={formData.shadingDesc}
          onChange={handleChange}
          error={errors.shadingDesc}
        />
      </div>
    </fieldset>
  );
};
