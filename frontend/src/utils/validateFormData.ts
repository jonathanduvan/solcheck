import type { SolarFormData as SolarFormData } from "../types/SolarFormData";

export type ValidationErrors = Partial<Record<keyof SolarFormData, string>>;

export function validateSingleField(
  field: keyof SolarFormData,
  value: string | boolean
): string | null {
  switch (field) {
    case "zip":
      return /^\d{5}$/.test(value as string)
        ? null
        : "Enter a valid 5-digit ZIP code";

    case "monthlyBill":
    case "systemSize":
    case "modulePower":
    case "moduleCount":
    case "mpptInputs":
    case "maxDcVoltage":
      return parseFloat(value as string) > 0
        ? null
        : "Must be a positive number";

    case "azimuth":
      const az = parseFloat(value as string);
      return az >= 0 && az <= 360 ? null : "Azimuth must be 0–360°";

    case "tilt":
      const tilt = parseFloat(value as string);
      return tilt >= 0 && tilt <= 90 ? null : "Tilt must be 0–90°";

    case "systemType":
    case "mountType":
      return (value as string).length > 0 ? null : "This field is required";

    case "batteryIncluded":
      return null; // no validation needed for boolean

    default:
      return null; // optional or unvalidated field
  }
}

export function validateFormData(data: SolarFormData): ValidationErrors {
  const errors: ValidationErrors = {};
  // Optional: Add more as needed...

  return errors;
}
