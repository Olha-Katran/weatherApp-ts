import React from 'react';
import {useGetWeatherQuery} from "../../redux/api/weather";
import {defaultApiOptions} from "../../redux/api/defaultApiOptions";
import CurrentLocation from "../../components/CurrentLocation/CurrentLocation";
import CurrentWeatherBlock from "../../components/CurrentWeatherBlock/CurrentWeatherBlock";

const CurrentWeather = () => {

    const {
        data: weather,
        isLoading,
        error
    } = useGetWeatherQuery('London' ,defaultApiOptions);

    return (
        <div>
            {error ? (
                <>Error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : weather ? (
                <>
                    <CurrentLocation
                        location={weather.name}
                        country={weather.sys.country}
                    />
                    <CurrentWeatherBlock
                        iconUrl={weather.weather[0].icon}
                        temperature={weather.main.temp}
                        description={weather.weather[0].description}
                    />
                </>
            ) : null}
        </div>
    )
};

export default CurrentWeather;