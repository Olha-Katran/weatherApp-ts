export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface MainWeatherData {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
}

export interface WindData {
    speed: number;
    deg: number;
    gust: number;
}

export interface RainData {
    '1h': number;
}

export interface CloudData {
    all: number;
}

export interface SysData {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
}

export interface WeatherResponse {
    coord: {
        lon: number;
        lat: number;
    };
    weather: Weather[];
    base: string;
    main: MainWeatherData;
    visibility: number;
    wind: WindData;
    rain: RainData;
    clouds: CloudData;
    dt: number;
    sys: SysData;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}