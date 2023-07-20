import { allCities } from "./all-cities";

export function isEmailValid(emailAddress) {
  // eslint-disable-next-line no-useless-escape
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return !!emailAddress.match(regex);
}

export function isCityValid(cityInput) {
  return allCities
    .map((city) => city.toLowerCase())
    .includes(cityInput.toLowerCase());
}

export function isPhoneValid(phoneInputState) {
  return phoneInputState.join("").length === 7;
}
