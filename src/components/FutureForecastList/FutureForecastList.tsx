import React, { useEffect, useState, useRef } from 'react';
import FutureForecastListItem from "../FutureForecastListItem/FutureForecastListItem";
import { useGetHourlyForecastQuery } from "../../redux/api/hourly-forecast";
import { useAppSelector } from "../../redux/hooks";
import styles from './FutureForecastList.module.scss';
import {NavigationItem} from "../../types/NavigationItem";
import BROWSER_ROUTES from "../../router/routes";
import NavigationTab from "../NavigationTab/NavigationTab";

const FutureForecastList:React.FC = () => {
    const selectedCity = useAppSelector((state) => state.cityData);
    const [tomorrowIndexMidnight, setTomorrowIndexMidnight] = useState<number>(0);
    const [tomorrowIndex, setTomorrowIndex] = useState<number>(0);
    const forecastListRef = useRef<HTMLUListElement>(null);
    const [activeTab, setActiveTab] = useState<'today' | 'tomorrow'>('today');
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const {
        data: forecast,
        isLoading,
        error
    } = useGetHourlyForecastQuery(selectedCity.coord);

    useEffect(() => {
        if (forecast) {
            const tomorrowDate = new Date();
            tomorrowDate.setDate(tomorrowDate.getDate() + 1);
            tomorrowDate.setHours(0, 0, 0, 0);

            const tomorrowMidnight = tomorrowDate.getTime() / 1000;

            const indexMidnight = forecast.list.findIndex(el => el.dt >= tomorrowMidnight);

            if (indexMidnight !== -1) {
                setTomorrowIndexMidnight(indexMidnight);
            }
        }
    }, [forecast]);


    useEffect(() => {
        if (forecast) {
            const tomorrowDate = new Date();
            tomorrowDate.setDate(tomorrowDate.getDate() + 2);
            tomorrowDate.setHours(0, 0, 0, 0);

            const tomorrowMidnight = tomorrowDate.getTime() / 1000;

            const index = forecast.list.findIndex(el => el.dt >= tomorrowMidnight);

            if (index !== -1) {
                setTomorrowIndex(index);
            }
        }
    }, [forecast]);

    const handleTabClick = (tab: 'today' | 'tomorrow') => {
        setActiveTab(tab);
        if (tab === 'today') {
            setActiveIndex(0);
        } else if(tab === 'tomorrow') {
            setActiveIndex(tomorrowIndexMidnight);
        }
    };

    const handleScroll = (): void => {
        if(forecastListRef.current) {
            const scrollLeft = forecastListRef.current.scrollLeft;
            const listItemWidth = 100;

            const firstVisibleIndex = Math.floor(scrollLeft / listItemWidth);

            if(firstVisibleIndex === 0) {
                setActiveTab('today');
            } else if (firstVisibleIndex === tomorrowIndexMidnight) {
                setActiveTab('tomorrow');
            }
        }
    };

    useEffect(() => {
        if(forecastListRef.current) {
            forecastListRef.current.addEventListener('scroll', handleScroll);
        }
        return () => {
            if(forecastListRef.current) {
                forecastListRef.current.removeEventListener('scroll', handleScroll);
            }
        }
    }, [forecastListRef]);

    const navItem: NavigationItem = {
        linkTo: `/${BROWSER_ROUTES.CURRENT_WEATHER}/${BROWSER_ROUTES.FORECAST}`,
        text: 'Next 5 days',
        matchToLinkEnd: false,
    }


    return (
        <>
            {error ? (
                <>Error</>
            ) : isLoading ? (
                <>Loading...</>
            ): forecast ? (
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
                        {/*<button*/}
                        {/*    type='button'*/}
                        {/*    className={styles.nav_button}*/}
                        {/*>*/}
                        {/*    Next 5 days*/}

                        {/*    <ArrowIcon />*/}
                        {/*</button>*/}
                        <div className={styles.nav_button}>
                            <NavigationTab
                                linkTo={navItem.linkTo}
                                text={navItem.text}
                                matchToLinkEnd={navItem.matchToLinkEnd}
                            />
                        </div>
                    </div>
                    <ul className={styles.forecast_list} ref={forecastListRef}>
                        {forecast.list.slice(0, tomorrowIndex).map((el, index) => {
                            return (
                                <li key={el.dt_txt}>
                                    <FutureForecastListItem
                                        dt={el.dt}
                                        iconUrl={el.weather[0].icon}
                                        temp={el.main.temp}
                                        isActive={index === activeIndex}
                                    />
                                </li>
                            );
                        })}
                    </ul>
                </>

            ): null}
        </>
    )
};

export default FutureForecastList;
