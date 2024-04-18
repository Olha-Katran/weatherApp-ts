import React from 'react';
import {useGetWeatherQuery} from "../../redux/api/weather";
import {defaultApiOptions} from "../../redux/api/defaultApiOptions";
import CurrentLocation from "../../components/CurrentLocation/CurrentLocation";

const CurrentWeather = () => {

    const {
        data: weather,
        isLoading,
        error
    } = useGetWeatherQuery('Lviv' ,defaultApiOptions);

    return (
        <div>
            {error ? (
                <>Error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : weather ? (
                <>
                    <CurrentLocation location={weather.name} country={weather.sys.country} />
                </>
            ) : null}
        </div>
    )
};

export default CurrentWeather;