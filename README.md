# Self-service portal host application

## Run project in development mode

```
npm i
npm run dev
```

## Run whole solution using `docker-compose`:

1. Clone all @RC-SES UI repositories in the same (sub)folder. Final folder structure should looke like this:
```
- rc-ses
  - self-service-portal-ui
  - self-service-portal-ui-root
  - self-service-provider-demo-angular-ui
  - self-service-provider-demo-react-ui
  - self-service-provider-demo-vue-ui
  - self-service-provider-demo-vue-ui-nots
  - rc-ses-vue-components
```

Run following command in current repository (`self-service-portal-ui-root`):
```
docker-compose up --build
```

Navigate:
`http://localhost:9100`
