import type { FunctionalComponent } from "preact";
import type { SolarFormData } from "../../types/SolarFormData";
import type { ValidationErrors } from "../../utils/validateFormData";

interface Props {
  formData: SolarFormData;
  setFormData: (data: SolarFormData) => void;
  errors: ValidationErrors;
}

export const BatterySection: FunctionalComponent<Props> = ({
  formData,
  setFormData,
}) => {
  const handleToggle = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      batteryIncluded: target.checked,
    });
  };

  return (
    <fieldset className="form-section">
      <legend>🔋 Battery Setup</legend>

      <label>
        <input
          type="checkbox"
          name="batteryIncluded"
          checked={formData.batteryIncluded}
          onChange={handleToggle}
        />
        Include Battery Storage?
      </label>
    </fieldset>
  );
};
