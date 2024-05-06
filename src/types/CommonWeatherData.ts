import {MainWeatherData} from "./MainWeatherData";
import {WeatherDetails} from "./WeatherDetails";
import {CloudData} from "./CloudData";
import {WindData} from "./WindData";

export interface CommonWeatherData {
    dt: number;
    main: MainWeatherData;
    weather: WeatherDetails[];
    clouds: CloudData;
    wind: WindData;
    visibility: number;
}