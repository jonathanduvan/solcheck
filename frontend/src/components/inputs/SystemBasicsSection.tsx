// components/SystemBasicsSection.tsx
import type { FunctionalComponent } from "preact";
import type { SolarFormData } from "../../types/SolarFormData";
import {
  validateField,
  type ValidationErrors,
} from "../../utils/validateFormData";
import { LabeledSelect } from "../shared/LabeledSelect";
import { LabeledField } from "../shared/LabeledField";

interface Props {
  formData: SolarFormData;
  setFormData: (data: SolarFormData) => void;
  errors: ValidationErrors;
}

export const SystemBasicsSection: FunctionalComponent<Props> = ({
  formData,
  setFormData,
  errors,
}) => {
  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;

    const { name, value } = target;
    validateField(name as keyof SolarFormData, String(value));

    setFormData({ ...formData, [name]: value });
  };

  return (
    <fieldset className="form-section">
      <legend>🔧 System Basics</legend>
      <div className="columns">
        <LabeledSelect
          label="System Type"
          name="systemType"
          value={formData.systemType}
          onChange={handleChange}
          required
          error={errors.systemType}
        >
          <option value="">-- Select --</option>
          <option value="Grid-tied">Grid-tied</option>
          <option value="Off-grid">Off-grid</option>
          <option value="Hybrid">Hybrid</option>
        </LabeledSelect>

        <LabeledSelect
          label="Mount Type"
          name="mountType"
          value={formData.mountType}
          onChange={handleChange}
          required
          error={errors.mountType}
        >
          <option value="">-- Select --</option>
          <option value="Roof">Roof</option>
          <option value="Ground Fixed Tilt">Ground Fixed Tilt</option>
          <option value="Single Axis Tracker">Single Axis Tracker</option>
        </LabeledSelect>

        <LabeledField
          label="System Size (kW DC)"
          name="systemSize"
          type="number"
          value={formData.systemSize}
          onChange={handleChange}
          required
          error={errors.systemSize}
        />
      </div>
    </fieldset>
  );
};
