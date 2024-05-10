import {CityData} from "./CityData";
import {CommonWeatherData} from "./CommonWeatherData";

export interface ForecastListItem extends CommonWeatherData {
    pop: number;
    sys: {
        pod: string;
    };
    dt_txt: string;
    rain: {
        '3h': number;
    };
}

export interface HourlyForecastResponse {
    cod: string;
    message: string;
    cnt: number;
    list: ForecastListItem[];
    city: CityData;
}