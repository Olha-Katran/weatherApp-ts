import React from 'react';
import styles from './WeatherIcon.module.scss';

type Props = {
    icon: React.ReactNode;
};


const WeatherIcon:React.FC<Props> = ({icon}) => {
    return (
        <div className={styles.weather_icon}>
            {icon}
        </div>
    )
};

export default WeatherIcon;