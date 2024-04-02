import React from 'react';
import styles from './ForecastBlock.module.scss';
import ForecastPhase from "../ForecastPhase/ForecastPhase";

const tempor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ForecastBlock:React.FC = () => {
    return (
        <div className={styles.forecast_box}>
            <div className={styles.forecast_block}>
                <div className={styles.forecast_wrapper}>
                    {tempor.map(element => (
                        <ForecastPhase key={element} index={element} />
                    ) )}
                </div>
            </div>
        </div>
    );
};

export default ForecastBlock;