import React from 'react';
import HeaderTop from "../../components/MainHeader/MainHeader";
import SubHeader from "../../components/SubHeader/SubHeader";
import AppNavigation from "../../components/AppNavigation/AppNavigation";
import WeatherTable from "../../components/WeatherTable/WeatherTable";

const Main = () => (
    <div>
        <HeaderTop />
        <SubHeader />
        <main>
            <WeatherTable />
        </main>
        <footer>
            <nav>Email</nav>
            <p>Contact</p>
            <AppNavigation />
        </footer>
    </div>
);

export default Main;