/*
 * Funkcija, skirta gauti šiuo metu galiojantį vartotojo JTW token'ą.
 */
export const getToken = (): string => 'n/a';

/*
 * Funkcija, skirta gauti paslaugos router'io `basename`
 */
export const getServiceFormBaseUrl = (): string => '/';

/*
 * Funkcija, skirta nukreipti naudotoją į savitarnos krepšelio puslapį.
 */
export const redirectToCart = (): void => {
  window.location.href = '/';
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
  window.location.href = '/';
}

/*
 * Funkcija, skirta nukreipti naudotoją į savitarnos titulinį puslapį.
 */
export const redirectToSelfServiceDashboardWithError = (type: 'failedToRetrieveOrderData' | 'failedToRetrieveListData'): void => {
  window.location.href = `/?${type}=true`;
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

