import React from 'react';
import {HourlyForecastResponse} from "../../types/HourlyForecast";
import ShortWeatherInfoHeader from "../ShortWeatherInfoHeader/ShortWeatherInfoHeader";
import styles from './ShortForecastList.module.scss';

type Props = {
    data: HourlyForecastResponse;
};


const ShortForecastList: React.FC<Props> = ({ data }) => {
    const dailyAverages = data.list.filter(item => {
        const itemDate = new Date(item.dt * 1000);
        return itemDate.getHours() === 15;
    });

    return (
        <div className={styles.short_forecast_list_container}>
            {dailyAverages.map((item) => (
                <ShortWeatherInfoHeader
                    key={item.dt}
                    dayOfWeek={item.dt}
                    temp={item.main.temp}
                    iconUrl={item.weather[0].icon}
                />
            ))}
        </div>
    )
};

export default ShortForecastList;