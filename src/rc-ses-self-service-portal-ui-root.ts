import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

import '@fontsource/source-sans-pro/400.css';
import '@fontsource/source-sans-pro/600.css';
import '@fontsource/source-sans-pro/700.css';
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start({
  urlRerouteOnly: true,
});

export * from "./utils/routing";
