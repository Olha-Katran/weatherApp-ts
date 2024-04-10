import React from 'react';
import TodayBaseForecastInfo from "../TodayBaseForecastInfo/TodayBaseForecastInfo";
import {ForecastListItem} from "../../types/HourlyForecast";
import styles from './ForecastPhase.module.scss';
import {formatTemperature} from "../../shared/FormatTemperature/FormatTemperature";
import {formatPressure} from "../../shared/FormatPressure/FormatPressure";
import {windDirection} from "../../shared/WindDirection/WindDirection";
import { MdNorthWest } from "react-icons/md";


type Props = {
    data: ForecastListItem;
}

const ForecastPhase: React.FC<Props> = ({ data }) => {
    const feelsLikeTemperature = formatTemperature(data.main.feels_like);
    const pressure = formatPressure(data.main.pressure);
    const windSpeed = data.wind.speed.toFixed(1);
    const WindIcon = windDirection(data.wind.deg);

    return (
        <div className={styles.forecast_info_container}>
            <TodayBaseForecastInfo data={data} />
            <p className={styles.additional_info}>{feelsLikeTemperature}</p>
            <p className={styles.pressure}>{pressure}</p>
            <p className={styles.humidity}>{data.main.humidity}</p>
            <p className={styles.wind}>
                <WindIcon />
                <span>{windSpeed}</span>
            </p>
            <p className={styles.precipitation}>{data.pop}</p>
        </div>
    )
};

export default ForecastPhase;