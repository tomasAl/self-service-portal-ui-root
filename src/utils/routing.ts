import { navigateToUrl } from "single-spa";
import Cookies from 'js-cookie'
import env from "../env";

/*
 * Funkcija, skirta nukreipti naudotoją į savitarnos krepšelio puslapį.
 */
export const getToken = (): string =>
  Cookies.get(env.ENV_AUTH_TOKEN_COOKIE_NAME);

/*
 * Funkcija, skirta nukreipti naudotoją į savitarnos krepšelio puslapį.
 */
export const redirectToCart = (): void =>
  navigateToUrl(`${env.ENV_PUBLIC_PORTAL_URL}/krepselis`);

/*
 * Funkcija, skirta nukreipti naudotoją į viešojo portalo titulinį puslapį.
 */
export const redirectToLanding = (): void =>
  navigateToUrl(env.ENV_PUBLIC_PORTAL_URL);

/*
 * Funkcija, skirta nukreipti naudotoją į savitarnos titulinį puslapį.
 */
export const redirectToSelfServiceDashboard = (): void =>
  navigateToUrl(`${env.ENV_PUBLIC_PORTAL_URL}/savitarna`);

/*
 * Funkcija, skirta nukreipti naudotoją į savitarnos titulinį puslapį.
 */
export const redirectToSelfServiceDashboardWithError = (type: 'failedToRetrieveOrderData' | 'failedToRetrieveListData'): void =>
  navigateToUrl(`${env.ENV_PUBLIC_PORTAL_URL}/savitarna?${type}=true`);

/*
 * Funkcija, skirta nukreipti naudotoją į paslaugos aprašymo puslapį.
 */
export const redirectToServiceDescriptionPage = (id: string): void =>
  navigateToUrl(`${env.ENV_PUBLIC_PORTAL_URL}/paslauga/${id}`);

/*
 * Funkcija, skirta nukreipti naudotoją į paslaugos aprašymo puslapį su klaidos pranešimu.
 */
export const unsupportedServiceRedirect = (id: string, message: string): void => {
  const urlParams = new URLSearchParams();
  urlParams.set('errorMessage', message);

  navigateToUrl(`${env.ENV_PUBLIC_PORTAL_URL}/paslauga/${id}?${urlParams.toString()}`);
}

