import React from 'react';
import {useGetWeatherQuery} from "../../redux/api/weather";
import {defaultApiOptions} from "../../redux/api/defaultApiOptions";
import {countryCodeToFullName} from "../../shared/FormatCountry/FormatCountry";

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
                    <div>
                        {weather.name},
                        <br />
                        {countryCodeToFullName(weather.sys.country)}
                    </div>
                </>
            ) : null}
        </div>
    )
};

export default CurrentWeather;