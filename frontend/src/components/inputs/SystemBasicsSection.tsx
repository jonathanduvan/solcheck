// components/SystemBasicsSection.tsx
import type { FunctionalComponent } from "preact";
import type { SolarFormData } from "../../types/SolarFormData";
import type { ValidationErrors } from "../../utils/validateFormData";

interface Props {
  formData: SolarFormData;
  setFormData: (data: SolarFormData) => void;
  errors: ValidationErrors;
}

export const SystemBasicsSection: FunctionalComponent<Props> = ({
  formData,
  setFormData,
}) => {
  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <fieldset className="form-section">
      <legend>🔧 System Basics</legend>

      <label>
        System Type:
        <select
          name="systemType"
          value={formData.systemType}
          onChange={handleChange}
          required
        >
          <option value="">-- Select --</option>
          <option value="Grid-tied">Grid-tied</option>
          <option value="Off-grid">Off-grid</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </label>

      <label>
        Mount Type:
        <select
          name="mountType"
          value={formData.mountType}
          onChange={handleChange}
          required
        >
          <option value="">-- Select --</option>
          <option value="Roof">Roof</option>
          <option value="Ground Fixed Tilt">Ground Fixed Tilt</option>
          <option value="Single Axis Tracker">Single Axis Tracker</option>
        </select>
      </label>

      <label>
        System Size (kW DC):
        <input
          type="number"
          name="systemSize"
          value={formData.systemSize}
          onInput={handleChange}
          required
        />
      </label>
    </fieldset>
  );
};
