import type { FunctionalComponent } from "preact";
import type { SolarFormData } from "../../types/SolarFormData";
import type { ValidationErrors } from "../../utils/validateFormData";

interface Props {
  formData: SolarFormData;
  setFormData: (data: SolarFormData) => void;
  errors: ValidationErrors;
}

export const ShadingSection: FunctionalComponent<Props> = ({
  formData,
  setFormData,
}) => {
  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <fieldset className="form-section">
      <legend>🌳 Shading Info</legend>

      <label>
        Shading Description:
        <input
          type="text"
          name="shadingDescription"
          value={formData.shadingDesc}
          onInput={handleChange}
        />
      </label>
    </fieldset>
  );
};
