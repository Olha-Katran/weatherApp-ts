import React from 'react';
import styles from './SubHeaderLocation.module.scss';

const SubHeaderLocation = () => {
    const currentDate = new Date();
    const daysOfWeek = ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const dayOfMonth = currentDate.getDate();
    const month = currentDate.toLocaleString('uk-UA', { month: 'short' });
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    const formattedDate = `${dayOfWeek} ${dayOfMonth} ${month} ${hours}:${minutes}`;

    return (
        <div className={styles.container}>
            <span className={styles.date}>{formattedDate}</span>
            <span className={styles.location}>Україна, Київ</span>
            <div className={styles.detail}>
                У Києві сильна хмарність, без опадів, +2°С
            </div>
        </div>
    );
}

export default SubHeaderLocation;