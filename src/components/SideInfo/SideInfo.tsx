import React from 'react';
import Spacer from "../../shared/Spacer/Spacer";
import styles from './SideInfo.module.scss';

const SideInfo = () => {
    const date = new Date();

    const currentTime = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`

    return (
        <div className={styles.side_info}>
            <div className={styles.time_info}>
                <div className={styles.local_time_cont}>
                    <div className={styles.local_time}>
                        Current Time
                        <span className={styles.time}>{currentTime}</span>
                    </div>
                    <Spacer size={7} backgroundColor='#f2f2f2' />
                </div>
                <div className={styles.day_light_sun}>
                    <div className={styles.sun_time}>Схід<span className={styles.time}>05:34</span></div>
                    <div className={styles.sun_time}>Захід<span className={styles.time}>18:40</span></div>
                </div>
            </div>
            <div className={styles.forecast_titles}>
                <p>Відчувається</p>
                <p>Тиск, мм</p>
                <p>Вологість, %</p>
                <p>Вітер, м/сек</p>
                <p>Ймовірність опадів, %</p>
            </div>
        </div>
    )
};

export default SideInfo;