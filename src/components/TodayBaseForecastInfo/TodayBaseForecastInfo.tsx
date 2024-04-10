import React from 'react';
import { TiWeatherPartlySunny } from "react-icons/ti";
import styles from './TodayBaseForecastInfo.module.scss';
import {ForecastListItem} from "../../types/HourlyForecast";
import {formatTimestampToTime} from "../../shared/FormatTimestampToTime/FormatTimestampToTime";
import {formatTemperature} from "../../shared/FormatTemperature/FormatTemperature";

type Props = {
    data: ForecastListItem;
}

const TodayBaseForecastInfo:React.FC<Props> = ({ data }) => {
    const time = formatTimestampToTime(data.dt);
    const temperature = formatTemperature(data.main.temp);

    return (
        <div className={styles.info}>
            <p className={styles.hour}>{time}</p>
            <TiWeatherPartlySunny className={styles.icon} />
            <p className={styles.temperature}>{temperature}</p>
        </div>
    )
};

export default TodayBaseForecastInfo;