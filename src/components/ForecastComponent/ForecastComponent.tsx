import React from 'react';
import {useAppSelector} from "../../redux/hooks";
import {useGetHourlyForecastQuery} from "../../redux/api/hourly-forecast";
import ShortForecastList from "../ShortForecastList/ShortForecastList";
import Loading from "../Loading/Loading";
import QueryError from "../../shared/QueryError/QueryError";
import ReturnButton from "../../shared/ReturnButton/ReturnButton";
import styles from './ForecastComponent.module.scss';

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
                <QueryError error={error} />
            ) : isLoading ? (
                <Loading  />
            ): forecast ? (
                <>
                    <ReturnButton name='Next 5 days' />
                    <ShortForecastList data={forecast} />
                </>
            ): null}
        </div>
    )
};

export default ForecastComponent;