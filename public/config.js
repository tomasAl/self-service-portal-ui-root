window.ENV = {
  ENV_PUBLIC_PORTAL_URL: "/",

  ENV_AUTH_TOKEN_COOKIE_NAME: "rc-ses.access_token",

  ENV_SERVICE_ROUTES: [
    {
      path: "00000000-0000-0000-0000-000000000000",
      application: "@rc-ses/self-service-provider-demo-react-ui",
    },
    {
      path: "00000000-0000-0000-0000-000000000001",
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
