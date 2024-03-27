import React, { useState } from 'react';
import {Outlet} from "react-router-dom";
// import {useDispatch, useSelector} from "react-redux";
import HeaderTop from "../../components/MainHeader/MainHeader";
import WeatherFooter from "../../components/WeatherFooter/WeatherFooter";
// import {setUserInputCity} from "../../redux/search/search";


const Main = () => {
    const [searchInput, setSearchInput] = useState<string>('');

    // const dispatch = useDispatch();
    // const userInputCity = useSelector((state) => state.cityInput.userInputCity);


    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = e.currentTarget.value;
        // dispatch(setUserInputCity(searchValue.trim() !== '' ? searchValue : 'Lviv'))

    }

    return (
        <div>
            <HeaderTop
                handleChange={handleSearchChange}
                value={searchInput}
            />
            <main>
                <Outlet />
            </main>
            <WeatherFooter />
        </div>
    );
}


export default Main;