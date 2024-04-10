import React from 'react';
import ForecastPhase from "../ForecastPhase/ForecastPhase";
import { ForecastListItem } from "../../types/HourlyForecast";
import styles from './ForecastBlock.module.scss';

type Props = {
    forecastData: ForecastListItem[];
}

const ForecastBlock:React.FC<Props> = ({ forecastData }) => {
    return (
        <div className={styles.forecast_wrapper}>
            {forecastData.map(data => (
                <ForecastPhase
                    key={data.dt}
                    data={data} />
            ) )}
        </div>
    );
};

export default ForecastBlock;