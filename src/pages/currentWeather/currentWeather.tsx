import React from 'react';
import {useGetWeatherQuery} from "../../redux/api/weather";
import {useAppSelector} from "../../redux/hooks";
import CurrentLocation from "../../components/CurrentLocation/CurrentLocation";
import CurrentWeatherBlock from "../../components/CurrentWeatherBlock/CurrentWeatherBlock";
import CurrentWeatherPropertiesList from "../../components/CurrentWeatherPropertiesList/CurrentWeatherPropertiesList";
import Places from "../../components/Places/Places";
import FutureForecastList from "../../components/FutureForecastList/FutureForecastList";

const CurrentWeather = () => {
    const selectedCity = useAppSelector((state) => state.cityData);

    const {
        data: weather,
        isLoading,
        error
    } = useGetWeatherQuery(selectedCity.coord);

    return (
        <>
            <Places />
            <div>
                {error ? (
                    <>Error</>
                ) : isLoading ? (
                    <>Loading...</>
                ) : weather ? (
                    <>
                        <CurrentLocation
                            location={selectedCity.city.split(',')[0].trim()}
                            country={weather.sys.country}
                        />
                        <CurrentWeatherBlock
                            iconUrl={weather.weather[0].icon}
                            temperature={weather.main.temp}
                            description={weather.weather[0].main}
                        />

                        <CurrentWeatherPropertiesList data={weather}/>
                        <FutureForecastList />
                    </>
                ) : null}
            </div>
        </>

    )
};

export default CurrentWeather;