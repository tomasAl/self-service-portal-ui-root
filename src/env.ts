export type EnvVariables = {
  ENV_PUBLIC_PORTAL_URL: string;
  ENV_SERVICE_ROUTES: { path: string, application: string }[];
};

declare global {
  interface Window {
    ENV: EnvVariables;
  }
}

const env: EnvVariables = {
  ENV_PUBLIC_PORTAL_URL: window.ENV?.ENV_PUBLIC_PORTAL_URL,
  ENV_SERVICE_ROUTES: window.ENV?.ENV_SERVICE_ROUTES,
}

export default env
