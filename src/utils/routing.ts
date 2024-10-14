import { navigateToUrl } from "single-spa";
import env from "../env";

export const redirectToCart = (): void =>
  navigateToUrl(`${env.ENV_PUBLIC_PORTAL_URL}/krepselis`);

export const redirectToLanding = (): void =>
  navigateToUrl(env.ENV_PUBLIC_PORTAL_URL);

export const redirectToSelfServiceDashboard = (): void =>
  navigateToUrl(`${env.ENV_PUBLIC_PORTAL_URL}/savitarna`);

export const redirectToServiceDescriptionPage = (id: string): void =>
  navigateToUrl(`${env.ENV_PUBLIC_PORTAL_URL}/paslauga/${id}`);

/*
 * Funkcija skirta nukreipti naudotoją į paslaugos aprašymo puslapį su klaidos pranešimu,
 * informuojančiu apie tai, kad paslauga negali būti teikiama klientui, prisijungus tam tikru vaidmeniu.
 */
export const unsupportedServiceRedirect = (id: string, message: string): void => {
  const urlParams = new URLSearchParams();
  urlParams.set('errorMessage', message);

  navigateToUrl(`${env.ENV_PUBLIC_PORTAL_URL}/paslauga/${id}?${urlParams.toString()}`);
}

