import React from 'react';
import styles from './ShortWeatherInfoHeader.module.scss';
import {formatTemperature} from "../../shared/FormatTemperature/FormatTemperature";

type Props = {
    dayOfWeek: number | string;
    temp: number;
    iconUrl: string;
    color?: boolean;
};

const dayNames: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


const ShortWeatherInfoHeader:React.FC<Props> = ({
                                                    dayOfWeek,
                                                    temp,
                                                    iconUrl,
                                                    color = false,
}) => {
    const temperature = formatTemperature(temp);
    let displayDayOfWeek = '';
    if (typeof dayOfWeek === 'number') {
        const timestamp = dayOfWeek * 1000;
        const date = new Date(timestamp);
        const dayOfWeekIndex = date.getDay();
        displayDayOfWeek = dayNames[dayOfWeekIndex];
    } else {
        displayDayOfWeek = dayOfWeek;
    }

    return(
        <div className={`${styles.info_container} ${color ? styles.color : ''}`}>
            <p>{displayDayOfWeek}</p>
            <div className={styles.icon_temperature_info}>
                <p className={styles.degree}>{temperature}</p>
                <img
                    src={`https://openweathermap.org/img/w/${iconUrl}.png`}
                    alt="Weather Icon"
                />
            </div>
        </div>
    )
};

export default ShortWeatherInfoHeader;