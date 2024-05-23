import React from 'react';
import {formatTimestampToTime} from "../../shared/FormatTimestampToTime/FormatTimestampToTime";
import styles from './FutureForecastListItem.module.scss';

type Props = {
    dt: number;
    iconUrl: string;
    temp: number;
    isActive?: boolean;
}

const FutureForecastListItem:React.FC<Props> = ({dt, temp, iconUrl, isActive = false}) => {
    const time = formatTimestampToTime(dt);
    return (
        <div className={`${styles.item_container} ${isActive ? styles.active : ''}`}>
            <p>{time}</p>
            <img
                src={`https://openweathermap.org/img/wn/${iconUrl}@4x.png`}
                alt='forecast icon'
                className={styles.forecast_icon}
            />
            <p className={styles.degree}>{temp.toFixed()}°C</p>
        </div>
    )
};

export default FutureForecastListItem;