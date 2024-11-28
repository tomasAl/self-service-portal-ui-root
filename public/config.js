window.ENV = {
  ENV_PUBLIC_PORTAL_URL: "http://localhost:9100",

  ENV_SERVICE_PROVIDER_DOMAIN: "http://localhost:9100",
  ENV_SERVICE_PROVIDER_FORM_PATH: "/",

  ENV_FRONTEND_DEFAULT_LANG: "lt",

  ENV_AUTH_TOKEN_COOKIE_NAME: "rc-ses.access_token",
  ENV_AUTH_TOKEN_COOKIE_HOST: ".rc-ses.local",

  ENV_FRONTEND_API_URL: "http://localhost:9100/api",

  ENV_KEYCLOAK_REALM: "ses-users",
  ENV_KEYCLOAK_CLIENT_ID: "ses-selfservice-api",
  ENV_KEYCLOAK_SERVER_URL: "http://localhost:9100",

  ENV_SERVICE_ROUTES: [
    {
      path: "09eec1a3-0674-479b-85fe-b9140879de7b",
      application: "@rc-ses/self-service-provider-demo-react-ui",
    },
    {
      path: "77ca7f18-07d3-4f4a-8da7-758e4fa7aee1",
      application: "@rc-ses/self-service-provider-demo-react-ui",
    },

    {
      path: "00000000-0000-0000-0001-000000000000",
      application: "@rc-ses/self-service-provider-demo-vue-ui",
    },
    {
      path: "00000000-0000-0000-0001-000000000001",
      application: "@rc-ses/self-service-provider-demo-vue-ui",
    },
  ],
};
