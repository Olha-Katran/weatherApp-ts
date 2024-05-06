import React from 'react';
import FutureForecastListItem from "../FutureForecastListItem/FutureForecastListItem";
import {useGetHourlyForecastQuery} from "../../redux/api/hourly-forecast";
import {useAppSelector} from "../../redux/hooks";
import styles from './FutureForecastList.module.scss';


const FutureForecastList:React.FC = () => {
    const selectedCity = useAppSelector((state) => state.cityData);

    const {
        data: forecast,
        isLoading,
        error
    } = useGetHourlyForecastQuery(selectedCity.coord)


    return (
        <>
            {error ? (
                <>Error</>
            ) : isLoading ? (
                <>Loading...</>
            ): forecast ? (
                <ul
                    className={styles.forecast_list}
                >
                    {forecast.list.map(el => {
                        return (
                                <li
                                    key={el.dt_txt}
                                >
                                    <FutureForecastListItem
                                        dt={el.dt}
                                        iconUrl={el.weather[0].icon}
                                        temp={el.main.temp}
                                    />
                                </li>
                            )

                    })}
                </ul>
            ): null}
        </>
    )
};

export default FutureForecastList;