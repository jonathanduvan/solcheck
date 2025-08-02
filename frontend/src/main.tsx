import { render } from "preact";
import "./index.css";
import { App } from "./app.tsx";
import { FormProvider } from "./context/SolarFormContext.tsx";

render(
  <FormProvider>
    <App />
  </FormProvider>,

  document.getElementById("app")!
);
