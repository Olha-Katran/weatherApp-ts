import React, {useRef, useState} from 'react';
import debounce from 'lodash.debounce';
import HeaderTop from "../../components/MainHeader/MainHeader";
import SubHeader from "../../components/SubHeader/SubHeader";
import WeatherTable from "../../components/WeatherTable/WeatherTable";
import WeatherFooter from "../../components/WeatherFooter/WeatherFooter";
import {useGetWeatherQuery} from "../../redux/api/main-api";

const DEBOUNCE_INTERVAL = 1000;
const searchResults = ['hdd', 'hhd', 'khk'];

const Main = () => {
    const [searchInput, setSearchInput] = useState<string>('');
    const [debounceSearch, setDebounceSearch] = useState<string | null>();

    // ToDo: TEMP params
    const { data, error, isLoading } = useGetWeatherQuery('Kyiv, ua');

    const debouncedSearch = useRef(
        debounce((searchValue: string | null) => {
            setDebounceSearch(searchValue);
        }, DEBOUNCE_INTERVAL),
    ).current;

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = e.currentTarget.value;
        setSearchInput(searchValue);
        if(searchValue.trim() === '') {
            debouncedSearch(null);
        } else debouncedSearch(searchValue);
    }

    return (
        <div>
            <HeaderTop
                handleChange={handleSearchChange}
                value={searchInput}
                searchResults={searchInput.trim() !== '' ? searchResults : undefined}
            />
            <SubHeader />
            <main>
                <WeatherTable />
                <div>
                    {error ? (
                        <>Oh no, there was an error</>
                    ) : isLoading ? (
                        <>Loading...</>
                    ) : data ? (
                        <>
                            <h3>{data.name}</h3>
                            <p>Main Weather: {data.timezone}</p>
                        </>
                    ) : null}
                </div>
            </main>
            <WeatherFooter />
        </div>
    );
}


export default Main;