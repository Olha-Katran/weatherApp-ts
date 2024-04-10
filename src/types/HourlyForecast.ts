import {CityData} from "./CityData";
import {CommonWeatherData} from "./CommonWeatherData";

export interface ForecastListItem extends CommonWeatherData {
    pop: number;
    sys: {
        pod: string;
    };
    dt_txt: string;
}

export interface HourlyForecastResponse {
    cod: string;
    message: string;
    cnt: number;
    list: ForecastListItem[];
    city: CityData;
}