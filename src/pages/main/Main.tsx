import React from 'react';
import HeaderTop from "../../components/MainHeader/MainHeader";
import SubHeader from "../../components/SubHeader/SubHeader";
import WeatherTable from "../../components/WeatherTable/WeatherTable";
import WeatherFooter from "../../components/WeatherFooter/WeatherFooter";

const Main = () => (
    <div>
        <HeaderTop />
        <SubHeader />
        <main>
            <WeatherTable />
        </main>
        <WeatherFooter />
    </div>
);

export default Main;