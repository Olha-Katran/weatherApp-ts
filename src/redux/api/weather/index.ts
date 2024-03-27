/* eslint-disable import/no-cycle */
import {WeatherResponse} from "../../../types/Weather";
import {mainApi} from "../main-api";
import {API_ROUTES} from "../routes";


const weatherApi = mainApi.injectEndpoints({
    endpoints: (builder) => ({
        getWeather: builder.query<WeatherResponse, string>({
            query: (city) => `${API_ROUTES.WEATHER}?q=${city}&appid=${process.env.REACT_APP_MY_API_KEY}`,
        }),
   }),
})

export const { useGetWeatherQuery } = weatherApi;
