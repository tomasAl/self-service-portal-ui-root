import { navigateToUrl } from "single-spa";

export const redirectToLanding = (): void => navigateToUrl('/');

export const redirectToCart = (): void => navigateToUrl('/krepselis');