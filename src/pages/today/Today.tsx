import React from 'react';
import SubHeader from "../../components/SubHeader/SubHeader";
import TabsContent from "../../components/TabsContent/TabsContent";
import {useGetWeatherQuery} from "../../redux/api/weather";
import {defaultApiOptions} from "../../redux/api/defaultApiOptions";
import {useGetHourlyForecastQuery} from "../../redux/api/hourly-forecast";

const temp = 'Lviv';

const Today = () => {
    //const { data: weather, isLoading, error } = useGetWeatherQuery(`${temp}`, defaultApiOptions);
    const {
        data: hourlyForecast,
        error,
        isLoading
    } = useGetHourlyForecastQuery(`${temp}`, defaultApiOptions)


    return (
        <>
            <SubHeader />
            <main>
                {/*<div>*/}
                {/*    {error ? (*/}
                {/*        <>Oh no, there was an error</>*/}
                {/*    ) : isLoading ? (*/}
                {/*        <>Loading...</>*/}
                {/*    ) : weather ? (*/}
                {/*        <>*/}
                {/*            <h3>{weather.name}</h3>*/}
                {/*            <p>Main Weather: {weather.timezone}</p>*/}
                {/*        </>*/}
                {/*    ) : null}*/}
                {/*</div>*/}

                {error ? (
                    <>Oh no, there was an error</>
                ) : isLoading ? (
                    <>Loading....</>
                ) : hourlyForecast ? (
                    <TabsContent data={hourlyForecast} />
                ) : null}

            </main>
        </>
    )
};


export default Today;