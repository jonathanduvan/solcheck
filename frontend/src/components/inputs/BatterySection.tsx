import type { FunctionalComponent } from "preact";
import type { SolarFormData } from "../../types/SolarFormData";
import type { ValidationErrors } from "../../utils/validateFormData";
import { ToggleField } from "../shared/ToggleField";

interface Props {
  formData: SolarFormData;
  setFormData: (data: SolarFormData) => void;
  errors: ValidationErrors;
}

export const BatterySection: FunctionalComponent<Props> = ({
  formData,
  setFormData,
  errors,
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
      <div className="columns">
        <ToggleField
          label="Include Battery Storage?"
          name="batteryIncluded"
          checked={formData.batteryIncluded}
          onChange={handleToggle}
          error={errors.batteryIncluded}
        />
      </div>
    </fieldset>
  );
};
