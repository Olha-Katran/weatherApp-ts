import React from 'react';
import styles from './CurrentWeatherBlock.module.scss';

type Props = {
    iconUrl: string;
    temperature: number;
    description: string;
}

const CurrentWeatherBlock:React.FC<Props> = ({
    iconUrl,
    temperature,
    description,
                                             }) => {

    const currentTemp = Math.round(temperature)

    return (
        <div className={styles.current_weather}>
            <img
                src={`https://openweathermap.org/img/wn/${iconUrl}@4x.png`}
                alt="Weather Icon"
                className={styles.current_weather_icon}
            />
            <div className={styles.current_weather_description}>
                <div className={styles.temperature_container}>
                    <h1>{currentTemp}</h1>
                    <p className={styles.degree_sign}>°C</p>
                </div>
                <h2 className={styles.two_line_ellipsis}>{description}</h2>
            </div>
        </div>
    )
};

export default CurrentWeatherBlock;