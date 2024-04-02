import React from 'react';
import { TiWeatherPartlySunny } from "react-icons/ti";
import styles from './TodayBaseForecastInfo.module.scss';

const TodayBaseForecastInfo = () => {
    return (
        <div className={styles.info}>
            <p className={styles.hour}>15:00</p>
            <TiWeatherPartlySunny className={styles.icon} />
            <p className={styles.temperature}>+13°</p>
        </div>
    )
};

export default TodayBaseForecastInfo;