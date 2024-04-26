import React from 'react';
import {CurrentWeather} from "../CurrentWeatherPropertiesList/CurrentWeatherPropertiesList";
import styles from './CurrentWeatherPropertiesListItem.module.scss';

type Props = {
    data: CurrentWeather;
}

const CurrentWeatherPropertiesListItem:React.FC<Props> = ({ data }) => {
    return (
        <div className={styles.current_weather_properties}>
            <div className={styles.weather_info}>
                <div className={styles.weather_icon}>
                    {data.icon}
                </div>
                <div>{data.title}</div>
            </div>
            <div className={styles.weather_value}>
                {data.value ? `${data.value} ${data.unit}` : <>&mdash;</>}
            </div>
        </div>
    )
};

export default CurrentWeatherPropertiesListItem;


