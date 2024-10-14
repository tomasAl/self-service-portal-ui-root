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
export const redirectToCart = (): void => navigateToUrl('/krepselis');
