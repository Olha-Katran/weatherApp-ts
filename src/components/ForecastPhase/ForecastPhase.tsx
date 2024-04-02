import React from 'react';
import TodayBaseForecastInfo from "../TodayBaseForecastInfo/TodayBaseForecastInfo";
import styles from './ForecastPhase.module.scss';

type Props = {
    index: number;
}

const ForecastPhase: React.FC<Props> = ({index}) => {
    return (
        <div className={styles.forecast_info_container}>
            <TodayBaseForecastInfo />
            <p className={styles.additional_info}>+13°</p>
            <p className={styles.pressure}>726</p>
            <p className={styles.humidity}>{index}</p>
            <p className={styles.wind}>5.0</p>
            <p className={styles.precipitation}>37</p>
        </div>
    )
};

export default ForecastPhase;