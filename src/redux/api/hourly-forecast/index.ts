/* eslint-disable import/no-cycle */
import {mainApi} from "../main-api";
import {API_ROUTES} from "../routes";
import {HourlyForecastResponse} from "../../../types/HourlyForecast";
import {Coord} from "../../../types/CityData";

const hourlyForecastApi = mainApi.injectEndpoints({
    endpoints: (builder) => ({
        getHourlyForecast: builder.query<HourlyForecastResponse, Coord>({
            query: ({ lat, lon }) => `${API_ROUTES.FORECAST}?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_MY_API_KEY}`,
        }),
    }),
})

export const { useGetHourlyForecastQuery } = hourlyForecastApi;