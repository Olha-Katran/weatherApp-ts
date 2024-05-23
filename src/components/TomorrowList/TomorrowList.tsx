import React from 'react';
import {CurrentWeather} from "../CurrentWeatherPropertiesList/CurrentWeatherPropertiesList";
import { ReactComponent as UmbrellaIcon } from "../../assets/weatherPropsIcons/umbrella_icon.svg";
import { ReactComponent as WindIcon } from '../../assets/weatherPropsIcons/wind-icon.svg';
import { ReactComponent as HumidityIcon } from "../../assets/weatherPropsIcons/humidity-icon.svg";
import styles from './TomorrowList.module.scss';
import WeatherIcon from "../../shared/WeatherIcon/WeatherIcon";

type Props = {
    wind: number;
    humidity: number;
    rain: number;
};

//ToDo: rename component

const TomorrowList: React.FC<Props> = ({ wind, humidity, rain }) => {
    const tomorrowWeather: CurrentWeather[] = [
        {
            icon: <UmbrellaIcon />,
            title: 'RainFall',
            value: rain,
            unit: 'cm'
        },
        {
            icon: <WindIcon />,
            title: 'Wind',
            value: wind,
            unit: 'km/h'
        },
        {
            icon: <HumidityIcon />,
            title: 'Humidity',
            value: humidity,
            unit: '%'
        },
    ];

    return (
        <div className={styles.tomorrow_list_container}>
            {tomorrowWeather.map(item => (
                <div key={item.title} className={styles.tomorrow_list_item}>
                    <WeatherIcon icon={item.icon} />
                    <p className={styles.tomorrow_value}>{item.value} {item.unit}</p>
                </div>
            ))}
        </div>
    )
};
export default TomorrowList;