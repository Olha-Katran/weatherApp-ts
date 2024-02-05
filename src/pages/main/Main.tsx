import React from 'react';
import HeaderTop from "../../components/MainHeader/MainHeader";
import SubHeader from "../../components/SubHeader/SubHeader";

const Main = () => (
    <div>
        <HeaderTop />
        <SubHeader />
        <main>Content</main>
        <section>Advertising</section>
        <footer>
            <nav>Email</nav>
            <p>Contact</p>
        </footer>
    </div>
);

export default Main;