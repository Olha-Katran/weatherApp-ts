import { countries } from "country-data";

export const countryCodeToFullName = (code: string): string => {
    if (countries.hasOwnProperty(code.toUpperCase())) {
        return countries[code.toUpperCase()].name;
    } else {
        return "Невідома країна";
    }
};