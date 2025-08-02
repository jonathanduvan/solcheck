import type { FunctionalComponent } from "preact";
import type { SolarFormData } from "../../types/SolarFormData";
import type { ValidationErrors } from "../../utils/validateFormData";

interface Props {
  formData: SolarFormData;
  setFormData: (data: SolarFormData) => void;
  errors: ValidationErrors;
}

export const ArraySetupSection: FunctionalComponent<Props> = ({
  formData,
  setFormData,
}) => {
  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <fieldset className="form-section">
      <legend>📐 Array Setup</legend>

      <label>
        Module Model:
        <input
          type="text"
          name="moduleModel"
          value={formData.moduleModel}
          onInput={handleChange}
        />
      </label>

      <label>
        Module Power (W):
        <input
          type="number"
          name="modulePower"
          value={formData.modulePower}
          onInput={handleChange}
        />
      </label>

      <label>
        Number of Modules:
        <input
          type="number"
          name="moduleCount"
          value={formData.moduleCount}
          onInput={handleChange}
        />
      </label>

      <label>
        Azimuth (0–360°):
        <input
          type="number"
          name="azimuth"
          value={formData.azimuth}
          onInput={handleChange}
        />
      </label>

      <label>
        Tilt (degrees):
        <input
          type="number"
          name="tilt"
          value={formData.tilt}
          onInput={handleChange}
        />
      </label>
    </fieldset>
  );
};
