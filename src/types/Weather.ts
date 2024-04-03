import {Coord} from "./CityData";
import {CommonWeatherData} from "./CommonWeatherData";

export interface RainData {
    '1h': number;
}

export interface SysData {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
}

export interface WeatherResponse extends CommonWeatherData {
    coord: Coord;
    base: string;
    rain: RainData;
    sys: SysData;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}