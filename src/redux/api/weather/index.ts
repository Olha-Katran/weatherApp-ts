/* eslint-disable import/no-cycle */
import {WeatherResponse} from "../../../types/Weather";
import {mainApi} from "../main-api";
import {API_ROUTES} from "../routes";
import {Coord} from "../../../types/CityData";


const weatherApi = mainApi.injectEndpoints({
    endpoints: (builder) => ({
        getWeather: builder.query<WeatherResponse, Coord>({
            query: ({lat, lon }) => `${API_ROUTES.WEATHER}?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_MY_API_KEY}`,
        }),
   }),
})

export const { useGetWeatherQuery } = weatherApi;
