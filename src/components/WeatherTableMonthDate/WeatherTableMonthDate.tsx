import React from 'react';
import styles from './WeatherTableMonthDate.module.scss';

type Props = {
    dayOfWeek: string;
    date: number;
    accent?: boolean;
}

const WeatherTableMonthDate:React.FC<Props> = ({
    date,
    dayOfWeek,
    accent= false,
}) => (
    <div className={styles.container}>
        <span className={`${styles.day} ${accent && styles.accent}`}>{dayOfWeek}</span>
        <span className={styles.date}>{date}</span>
    </div>
);

export default WeatherTableMonthDate;