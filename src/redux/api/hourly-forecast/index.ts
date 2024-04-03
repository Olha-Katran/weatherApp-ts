/* eslint-disable import/no-cycle */
import {mainApi} from "../main-api";
import {API_ROUTES} from "../routes";
import {HourlyForecastResponse} from "../../../types/HourlyForecast";

const hourlyForecastApi = mainApi.injectEndpoints({
    endpoints: (builder) => ({
        getHourlyForecast: builder.query<HourlyForecastResponse, string>({
            query: (city) => `${API_ROUTES.FORECAST}?q=${city}&appid=${process.env.REACT_APP_MY_API_KEY}`,
        }),
    }),
})

export const { useGetHourlyForecastQuery } = hourlyForecastApi;