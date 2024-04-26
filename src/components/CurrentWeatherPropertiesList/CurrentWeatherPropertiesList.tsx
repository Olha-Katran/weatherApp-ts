import React from 'react';
import CurrentWeatherPropertiesListItem from "../CurrentWeatherPropertiesListItem/CurrentWeatherPropertiesListItem";
import { ReactComponent as UmbrellaIcon } from '../../assets/weatherPropsIcons/umbrella_icon.svg';
import { ReactComponent as WindIcon } from '../../assets/weatherPropsIcons/wind-icon.svg';
import { ReactComponent as HumidityIcon } from '../../assets/weatherPropsIcons/humidity-icon.svg';
import { ReactComponent as PressureIcon } from "../../assets/weatherPropsIcons/barometer-icon.svg";
import { ReactComponent as ThermometerIcon } from "../../assets/weatherPropsIcons/thermometer-icon.svg";
import {WeatherResponse} from "../../types/Weather";
import {formatPressure} from "../../shared/FormatPressure/FormatPressure";
import styles from './CurrentWeatherPropertiesList.module.scss';


type Props = {
    data: WeatherResponse;
}


export type CurrentWeather = {
    icon: React.ReactNode;
    title: string;
    value: number;
    unit: string;
};

const CurrentWeatherPropertiesList:React.FC<Props> = ({ data }) => {
    const weather: CurrentWeather[] = [
        {
           icon: <UmbrellaIcon />,
           title: 'RainFall',
           value: data.rain ? data.rain['1h'] : 0,
           unit: 'mm/h',
        },
        {
            icon: <WindIcon />,
            title: 'Wind',
            value: data.wind.speed,
            unit: 'km/h',
        },
        {
            icon: <HumidityIcon />,
            title: 'Humidity',
            value: data.main.humidity,
            unit: '%',
        },
        {
            icon: <PressureIcon />,
            title: 'Pressure',
            value: formatPressure(data.main.pressure),
            unit: 'mm',
        },
        {
            icon: <ThermometerIcon />,
            title: 'Feels Like',
            value: Math.round(data.main.feels_like),
            unit: '°C',
        },
    ]
    return (
        <div className={styles.container}>
            {weather.map(el => (
                <CurrentWeatherPropertiesListItem
                    key={el.title}
                    data={el}
                />
            ))}
        </div>
    )
};

export default CurrentWeatherPropertiesList;