import React from 'react';
import ReturnButton from "../../shared/ReturnButton/ReturnButton";
import TomorrowCard from "../TomorrowCard/TomorrowCard";
import styles from './ForecastComponent.module.scss';
import {useAppSelector} from "../../redux/hooks";
import {useGetHourlyForecastQuery} from "../../redux/api/hourly-forecast";
import ShortForecastList from "../ShortForecastList/ShortForecastList";

const ForecastComponent = () => {
    const selectedCity = useAppSelector((state) => state.cityData);

    const {
        data: forecast,
        isLoading,
        error
    } = useGetHourlyForecastQuery(selectedCity.coord);

    return (
        <div className={styles.forecast_container}>
            {error ? (
                <>Error</>
            ) : isLoading ? (
                <>Loading...</>
            ): forecast ? (
                <>
                    <ReturnButton name='Next 5 days' />
                    <TomorrowCard data={forecast}/>
                    <ShortForecastList data={forecast} />
                </>
            ): null}
        </div>
    )
};

export default ForecastComponent;