import React from 'react';
import WeatherTableMonthDate from "../WeatherTableMonthDate/WeatherTableMonthDate";
import WeatherTableMonthWeather from "../WeatherTableMonthWeather/WeatherTableMonthWeather";
import styles from './WeatherTable.module.scss';

interface Data  {
    id: number;
    dayOfWeek: string;
    date: number;
    icon: string;
    maxDegree: string;
    minDegree: string;
    accent?: boolean;
}

const WeatherTable:React.FC= () => {

    const weatherData:Data[] = [
        {
            id: 1,
            dayOfWeek: 'Пн',
            date: 3,
            icon: 'string',
            maxDegree: '+4',
            minDegree: '-5',
        },
        {
            id: 2,
            dayOfWeek: 'вт',
            date: 4,
            icon: 'string',
            maxDegree: '+4',
            minDegree: '-5',
        },
        {
            id: 3,
            dayOfWeek: 'ср',
            date: 5,
            icon: 'string',
            maxDegree: '+4',
            minDegree: '-5',
        },
        {
            id: 4,
            dayOfWeek: 'чт',
            date: 6,
            icon: 'string',
            maxDegree: '+4',
            minDegree: '-5',
        },
        {
            id: 5,
            dayOfWeek: 'пт',
            date: 7,
            icon: 'string',
            maxDegree: '+4',
            minDegree: '-5',
        },
        {
            id: 6,
            dayOfWeek: 'сб',
            date: 8,
            icon: 'string',
            maxDegree: '+4',
            minDegree: '-5',
            accent: true,
        },
        {
            id: 7,
            dayOfWeek: 'нд',
            date: 9,
            icon: 'string',
            maxDegree: '+4',
            minDegree: '-5',
            accent: true,
        },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.month_wrap}>
                <div className={styles.month_week}>
                    {weatherData.map(item => (
                        <div key={item.id} className={styles.data}>
                            <WeatherTableMonthDate
                                dayOfWeek={item.dayOfWeek}
                                date={item.date}
                                accent={item.accent}
                            />
                            <WeatherTableMonthWeather
                                maxDegree={item.maxDegree}
                                minDegree={item.minDegree}
                            />
                        </div>
                    ))}
                </div>
                <div className={styles.month_week}>
                    {weatherData.map(item => (
                        <div key={item.id} className={styles.data}>
                            <WeatherTableMonthDate
                                dayOfWeek={item.dayOfWeek}
                                date={item.date}
                                accent={item.accent}
                            />
                            <WeatherTableMonthWeather
                                maxDegree={item.maxDegree}
                                minDegree={item.minDegree}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default WeatherTable;