import React, { useEffect, useState, useRef } from 'react';
import BROWSER_ROUTES from "../../router/routes";
import { useGetHourlyForecastQuery } from "../../redux/api/hourly-forecast";
import { useAppSelector } from "../../redux/hooks";
import { NavigationItem } from "../../types/NavigationItem";
import FutureForecastListItem from "../FutureForecastListItem/FutureForecastListItem";
import NavigationTab from "../NavigationTab/NavigationTab";
import QueryError from "../../shared/QueryError/QueryError";
import styles from './FutureForecastList.module.scss';

const FutureForecastList: React.FC = () => {
    const selectedCity = useAppSelector((state) => state.cityData);
    const [tomorrowIndexMidnight, setTomorrowIndexMidnight] = useState<number>(0);
    const [tomorrowIndex, setTomorrowIndex] = useState<number>(0);
    const forecastListRef = useRef<HTMLUListElement>(null);
    const [activeTab, setActiveTab] = useState<'today' | 'tomorrow'>('today');
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const { data: forecast, isLoading, error } = useGetHourlyForecastQuery(selectedCity.coord);

    useEffect(() => {
        if (forecast) {
            const getMidnightTimestamp = (daysAhead: number): number => {
                const date = new Date();
                date.setDate(date.getDate() + daysAhead);
                date.setHours(0, 0, 0, 0);
                return date.getTime() / 1000;
            };

            const tomorrowMidnight = getMidnightTimestamp(1);
            const dayAfterTomorrowMidnight = getMidnightTimestamp(2);

            const indexMidnight = forecast.list.findIndex(el => el.dt >= tomorrowMidnight);
            const index = forecast.list.findIndex(el => el.dt >= dayAfterTomorrowMidnight);

            if (indexMidnight !== -1) {
                setTomorrowIndexMidnight(indexMidnight);
            }

            if (index !== -1) {
                setTomorrowIndex(index);
            }
        }
    }, [forecast]);

    const handleTabClick = (tab: 'today' | 'tomorrow') => {
        setActiveTab(tab);
        setActiveIndex(tab === 'today' ? 0 : tomorrowIndexMidnight);

        if (forecastListRef.current) {
            const scrollPosition = tab === 'today' ? 0 : tomorrowIndexMidnight * 85;
            forecastListRef.current.scrollTo({ left: scrollPosition, behavior: 'smooth' });
        }
    };

    const handleScroll = (): void => {
        if (forecastListRef.current) {
            const scrollLeft = forecastListRef.current.scrollLeft;
            const listItemWidth = 85;

            const firstVisibleIndex = Math.floor(scrollLeft / listItemWidth);

            if (firstVisibleIndex < tomorrowIndexMidnight) {
                setActiveTab('today');
            } else {
                setActiveTab('tomorrow');
            }
            setActiveIndex(firstVisibleIndex);
        }
    };

    useEffect(() => {
        const forecastListElement = forecastListRef.current;
        if (forecastListElement) {
            forecastListElement.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (forecastListElement) {
                forecastListElement.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const navItem: NavigationItem = {
        linkTo: `/${BROWSER_ROUTES.CURRENT_WEATHER}/${BROWSER_ROUTES.FORECAST}`,
        text: 'Next 5 days',
        matchToLinkEnd: false,
    };

    return (
        <>
            {error ? (
                <QueryError error={error} />
            ) : isLoading ? (
                <>Loading...</>
            ) : forecast ? (
                <>
                    <div className={styles.tabs}>
                        <button
                            type='button'
                            className={`${styles.tab_day} ${activeTab === 'today' ? styles.active : ''}`}
                            onClick={() => handleTabClick('today')}
                        >
                            Today
                        </button>
                        <button
                            type='button'
                            className={`${styles.tab_day} ${activeTab === 'tomorrow' ? styles.active : ''}`}
                            onClick={() => handleTabClick('tomorrow')}
                        >
                            Tomorrow
                        </button>
                        <div className={styles.nav_button}>
                            <NavigationTab
                                linkTo={navItem.linkTo}
                                text={navItem.text}
                                matchToLinkEnd={navItem.matchToLinkEnd}
                            />
                        </div>
                    </div>
                    <ul className={styles.forecast_list} ref={forecastListRef}>
                        {forecast.list.slice(0, tomorrowIndex).map((el, index) => (
                            <li key={el.dt_txt}>
                                <FutureForecastListItem
                                    dt={el.dt}
                                    iconUrl={el.weather[0].icon}
                                    temp={el.main.temp}
                                    isActive={index === activeIndex}
                                />
                            </li>
                        ))}
                    </ul>
                </>
            ) : null}
        </>
    );
};

export default FutureForecastList;
