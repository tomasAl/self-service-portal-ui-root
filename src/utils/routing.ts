import env from "../env";

/*
 * Funkcija, skirta gauti šiuo metu galiojantį vartotojo JTW token'ą.
 */
export const getToken = (): string => 'n/a';

/*
 * Funkcija, skirta gauti Paslaugos router'io `basename`
 */
export const getServiceFormBaseUrl = (): string => `${env.ENV_SERVICE_PROVIDER_MFE_BASENAME}/${env.ENV_SERVICE_PROVIDER_SERVICE_PATH}`;

/*
 * Funkcija, skirta gauti MFE router'io basename
 */
export const getMFEBaseUrl = (): string => env.ENV_SERVICE_PROVIDER_MFE_BASENAME;

/*
 * Funkcija, skirta gauti "Paslaugos" router'io nuorodos fragmentą
 */
export const getServiceFormUrlFragment = (): string => env.ENV_SERVICE_PROVIDER_SERVICE_PATH;

/*
 * Funkcija, skirta gauti "Mano Turtas" router'io nuorodos fragmentą
 */
export const getOwnedPropertiesUrlFragment = (): string => env.ENV_SERVICE_PROVIDER_OWNED_PROPERTIES_PATH;

/*
 * Funkcija, skirta nukreipti naudotoją į savitarnos krepšelio puslapį.
 */
export const redirectToCart = (): void => {
  window.location.href = `${env.ENV_PUBLIC_PORTAL_URL}/krepselis`;
}

/*
 * Funkcija, skirta nukreipti naudotoją į viešojo portalo titulinį puslapį.
 */
export const redirectToLanding = (): void => {
  window.location.href = '/';
}

/*
 * Funkcija, skirta nukreipti naudotoją į savitarnos titulinį puslapį.
 */
export const redirectToSelfServiceDashboard = (): void => {
  window.location.href = env.ENV_PUBLIC_PORTAL_URL, {};
}

/*
 * Funkcija, skirta nukreipti naudotoją į savitarnos titulinį puslapį su klaidos pranešimu.
 */
export const redirectToSelfServiceDashboardWithError = (type: 'failedToRetrieveOrderData' | 'failedToRetrieveListData'): void => {
  window.location.href = `${env.ENV_PUBLIC_PORTAL_URL}?${type}=true`;
}

/*
 * Funkcija, skirta nukreipti naudotoją į savitarnos "Mano Turtas" puslapį.
 */
export const redirectToSelfServiceOwnedProperties = (): void => {
  window.location.href = env.ENV_PUBLIC_PORTAL_URL, {};
}

/*
 * Funkcija, skirta nukreipti naudotoją į paslaugos aprašymo puslapį.
 */
export const redirectToServiceDescriptionPage = (id: string): void => {
  const urlParams = new URLSearchParams();
  urlParams.set('serviceId', id);

  window.location.href = `/?${urlParams.toString()}`;
}

/*
 * Funkcija, skirta nukreipti naudotoją į paslaugos aprašymo puslapį su klaidos pranešimu.
 */
export const unsupportedServiceRedirect = (id: string, message: string): void => {
  const urlParams = new URLSearchParams();
  urlParams.set('serviceId', id);
  urlParams.set('errorMessage', message);

  window.location.href = `/?${urlParams.toString()}`;
}

