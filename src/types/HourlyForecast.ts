import {CityData} from "./CityData";
import {CommonWeatherData} from "./CommonWeatherData";

export interface ListItem extends CommonWeatherData {
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
    list: ListItem[];
    city: CityData;
}