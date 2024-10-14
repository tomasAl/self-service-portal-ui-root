import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

import '@fontsource/source-sans-pro/400.css';
import '@fontsource/source-sans-pro/600.css';
import '@fontsource/source-sans-pro/700.css';

import env from "./env";

const routeConfig = env.ENV_SERVICE_ROUTES

export const layoutAndRoutes = `
<single-spa-router base="/paslaugos/uzsakymas">
  <main>
    <application name="@rc-ses/self-service-portal-ui"></application>

    <div id="container">
      ${routeConfig.map((route) => (`
        <route path="${route.path}">
          <application name="${route.application}"></application>
        </route>
      `)).join('')}

      <route default>
        <div id="not-found-container">
          <div>
            404
            <br />
            <a href="${env.ENV_PUBLIC_PORTAL_URL}/savitarna">¯\\_(ツ)_/¯</a>
          </div>
        </div>
      </route>
    </div>

    <footer>
      &copy; Valstybės įmonė Registrų centras | Adresas Studentų g. 39, LT-08106 Vilnius | Tel. +370 5 268 8262, el. p. info@registrucentras.lt. Duomenys apie įmonę kaupiami ir saugomi Juridinių asmenų registre | Įmonės kodas 124110246, PVM mokėtojo kodas LT241102419.
    </footer>
  </main>
</single-spa-router>
`;

const routes = constructRoutes(layoutAndRoutes);

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
