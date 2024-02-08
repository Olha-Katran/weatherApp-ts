import React from 'react';
import HeaderTop from "../../components/MainHeader/MainHeader";
import SubHeader from "../../components/SubHeader/SubHeader";
import AppNavigation from "../../components/AppNavigation/AppNavigation";
import WeatherTable from "../../components/WeatherTable/WeatherTable";

const Main = () => (
    <div>
        <HeaderTop />
        <SubHeader />
        <main>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales accumsan leo, ullamcorper vehicula velit. Duis imperdiet condimentum commodo. Donec congue ipsum nisi, et varius eros pulvinar at.
            Curabitur varius nibh ligula, vitae iaculis odio semper nec. Nunc vel metus faucibus lorem efficitur lobortis in vel ipsum. Aenean ut erat non dolor faucibus viverra quis mollis mauris. Aliquam sagittis sed
            magna in vestibulum. Nulla tincidunt orci facilisis facilisis viverra. Maecenas nec diam mauris. Integer tristique in tellus vel sodales. Curabitur massa est, commodo ac ante congue, euismod dignissim magna.
            tnia
            Nullam sem lacus, ullamcorper commodo tellus quis, rhoncus porta nulla. Mauris cursus aliquet nulla, ac varius neque dapibus a. Nunc nulla nibh, dictum vel diam at, vulputate malesuada enim. Nam molestie
            u t massa ut condimentum. Praesent augue lorem, laoreet sagittis aliquet ac, vestibulum eget libero. Nullam euismod dolor vitae augue aliquet commodo. Cras quis finibus enim. Pellentesque eu feugiat massa,
            et placerat tortor.</main>
        <section>
            <WeatherTable />
        </section>
        <footer>
            <nav>Email</nav>
            <p>Contact</p>
            <AppNavigation />
        </footer>
    </div>
);

export default Main;