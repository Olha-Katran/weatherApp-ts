import React from 'react';
import {HourlyForecastResponse} from "../../types/HourlyForecast";
import TomorrowList from "../TomorrowList/TomorrowList";
import ShortWeatherInfoHeader from "../ShortWeatherInfoHeader/ShortWeatherInfoHeader";
import styles from './TomorrowCard.module.scss';

type Props = {
  data: HourlyForecastResponse;
};

const TomorrowCard: React.FC<Props> = ({ data }): JSX.Element | null => {
    const list = data.list;
    const currentDate = new Date();

    const tomorrowDate = new Date();
    tomorrowDate.setDate(currentDate.getDate() + 1);

    tomorrowDate.setHours(15, 0,0, 0);

    const tomorrowForecast = list.filter((item) => {
        const itemDate = new Date(item.dt * 1000);
        return (
            itemDate.getDate() === tomorrowDate.getDate() &&
            itemDate.getHours() === tomorrowDate.getHours()
        );
    })

    if(tomorrowForecast.length > 0) {
        const temperature = tomorrowForecast[0].main.temp;
        const weatherIcon = tomorrowForecast[0].weather[0].icon;
        const wind = +tomorrowForecast[0].wind.speed.toFixed(1);
        const humidity = tomorrowForecast[0].main.humidity;
        const rain = tomorrowForecast[0].rain ? tomorrowForecast[0].rain["3h"] : 0;

        return (
            <div className={styles.tomorrow_card_container}>
                <ShortWeatherInfoHeader
                    dayOfWeek='Tomorrow'
                    temp={temperature}
                    iconUrl={weatherIcon}
                    color
                />
                <TomorrowList wind={wind} humidity={humidity} rain={rain} />
            </div>
        )
    } else {
        return null;
    }
};

export default TomorrowCard;