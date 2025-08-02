import type { FunctionalComponent } from "preact";
import type { SolarFormData } from "../../types/SolarFormData";
import type { ValidationErrors } from "../../utils/validateFormData";

interface Props {
  formData: SolarFormData;
  setFormData: (data: SolarFormData) => void;
  errors: ValidationErrors;
}

export const InverterSetupSection: FunctionalComponent<Props> = ({
  formData,
  setFormData,
}) => {
  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <fieldset className="form-section">
      <legend>⚡ Inverter Setup</legend>

      <label>
        Inverter Model:
        <input
          type="text"
          name="inverterModel"
          value={formData.inverterModel}
          onInput={handleChange}
        />
      </label>

      <label>
        Number of MPPT Inputs:
        <input
          type="number"
          name="numMpptInputs"
          value={formData.mpptInputs}
          onInput={handleChange}
        />
      </label>

      <label>
        Max DC Voltage:
        <input
          type="number"
          name="maxDcVoltage"
          value={formData.maxDcVoltage}
          onInput={handleChange}
        />
      </label>
    </fieldset>
  );
};
