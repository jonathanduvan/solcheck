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

export const InverterSetupSection: FunctionalComponent<Props> = ({
  formData,
  setFormData,
  errors,
}) => {
  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;

    const { name, value } = target;

    validateField(name as keyof SolarFormData, String(value));
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <fieldset className="form-section">
      <legend>⚡ Inverter Setup</legend>
      <div className="columns">
        <LabeledField
          label="Inverter Model"
          name="inverterModel"
          type="text"
          value={formData.inverterModel}
          onChange={handleChange}
          error={errors.inverterModel}
        />

        <LabeledField
          label="Number of MPPT Inputs"
          name="mpptInputs"
          type="number"
          value={formData.mpptInputs}
          onChange={handleChange}
          error={errors.mpptInputs}
        />

        <LabeledField
          label="Max DC Voltage"
          name="maxDcVoltage"
          type="number"
          value={formData.maxDcVoltage}
          onChange={handleChange}
          error={errors.maxDcVoltage}
        />
      </div>
    </fieldset>
  );
};
