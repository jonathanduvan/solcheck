// types/SolarFormData.ts

export interface SolarFormData {
  zip: string; // should match /^\d{5}$/
  monthlyBill: string; // numeric string, > 0
  systemType: string; // dropdown
  mountType: string; // dropdown
  systemSize: string; // numeric string, > 0

  moduleModel: string; // optional/autofill
  modulePower: string; // numeric string, > 0
  moduleCount: string; // numeric string, > 0
  azimuth: string; // 0–360
  tilt: string; // 0–90

  inverterModel: string;
  mpptInputs: string; // numeric string, > 0
  maxDcVoltage: string; // numeric string, > 0

  shadingDesc: string; // dropdown or freeform
  batteryIncluded: boolean; // toggled checkbox
}
