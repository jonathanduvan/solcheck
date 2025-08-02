// hooks/useFormData.ts
import { useEffect, useState } from "preact/hooks";
import { type SolarFormData } from "../types/SolarFormData";

const defaultFormData: SolarFormData = {
  zip: "",
  monthlyBill: "",
  systemType: "Grid-tied",
  mountType: "Roof",
  systemSize: "",
  moduleModel: "",
  modulePower: "",
  moduleCount: "",
  azimuth: "",
  tilt: "",
  inverterModel: "",
  mpptInputs: "",
  maxDcVoltage: "",
  shadingDesc: "",
  batteryIncluded: false,
};

const LOCAL_STORAGE_KEY = "solcheck-form-data";

export function useFormData() {
  const [formData, setFormData] = useState<SolarFormData>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultFormData;
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  return { formData, setFormData };
}
