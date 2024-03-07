import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {API_BASE_URL, API_ROUTES} from "./routes";
import {WeatherResponse} from "../../types/Weather";


export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
    endpoints: (builder) => ({
        getWeather: builder.query<WeatherResponse, string>({
            query: (city) => `${API_ROUTES.WEATHER}?q=${city}&appid=${process.env.REACT_APP_MY_API_KEY}`,
        }),
    }),
})

export const { useGetWeatherQuery } = weatherApi;
export default weatherApi;