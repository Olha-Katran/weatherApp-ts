import React, {useState} from 'react';
import {HourlyForecastResponse} from "../../types/HourlyForecast";
import ShortWeatherInfoHeader from "../ShortWeatherInfoHeader/ShortWeatherInfoHeader";
import styles from './ShortForecastList.module.scss';
import TomorrowList from "../TomorrowList/TomorrowList";

type Props = {
    data: HourlyForecastResponse;
};


const ShortForecastList: React.FC<Props> = ({ data }) => {
    const [selectedItem, setSelectedItem] = useState<number | null>(0);
    const dailyAverages = data.list.filter(item => {
        const itemDate = new Date(item.dt * 1000);
        return itemDate.getHours() === 15;
    });

    const toggleList = (index: number): void => {
        setSelectedItem(index === selectedItem ? null : index);
        console.log(selectedItem);
    }

    return (
        <ul className={styles.short_forecast_list_container}>
            {dailyAverages.map((item, index) => (
                <li key={item.dt} className={`${styles.short_forecast_list_item} ${index == selectedItem ? styles.active : '' }`}>
                    <ShortWeatherInfoHeader
                        index={index}
                        dayOfWeek={item.dt}
                        temp={item.main.temp}
                        iconUrl={item.weather[0].icon}
                        onClick={() => toggleList(index)}
                    />
                    {index === selectedItem && (
                        <div className={styles.hidden_element}>
                            <TomorrowList
                                wind={item.wind.speed}
                                rain={item.rain ? item.rain['3h'] : 0}
                                humidity={item.main.humidity}
                            />
                        </div>
                    )}
                </li>
            ))}
        </ul>
    )
};

export default ShortForecastList;