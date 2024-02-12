import React from 'react';
import styles from './WeatherTableMonthWeather.module.scss';
import { ReactComponent as CloudIcon } from '../../assets/weatherTable/weather-cloud-icon.svg';

type Props = {
    maxDegree: string;
    minDegree: string;
}

const WeatherTableMonthWeather:React.FC<Props> = ({maxDegree, minDegree}) => (
    <div className={styles.container}>
        <div className={styles.weather_icon}>
            <CloudIcon />
        </div>
        <div className={styles.degree}>
            <span className={styles.high}>{`${maxDegree}°`}</span>
            <span className={styles.low}>{`${minDegree}°`}</span>
        </div>
    </div>
);

export default WeatherTableMonthWeather;