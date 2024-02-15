import {t} from "i18next";
import React from 'react';
import {Link} from "react-router-dom";
import { ReactComponent as LogoIcon } from '../../assets/header/header-logo-icon.svg';
import { ReactComponent as SearchIcon } from '../../assets/header/search-icon.svg';
import { ReactComponent as SearchHideIcon } from '../../assets/header/header-search-arrow-hide-icon.svg';
import MenuHamburger from "../MenuHamburger/MenuHamburger";
import styles from './Header.module.scss';
import Logo from "../../shared/Logo/Logo";

const HeaderTop = () => {
    return (
        <header className={styles.container}>
            {/*<button className={styles.open_menu}>*/}
            {/*    <MenuIcon />*/}
            {/*</button>*/}
            <MenuHamburger />
            <Link to='/' className={styles.logo}>
               <Logo />
            </Link>
            <div className={styles.search_active}>
                <div className={styles.search_wrap}>
                    <form>
                        <div className={styles.search_hide}>
                            <SearchHideIcon />
                        </div>
                    </form>
                </div>
            </div>

            <div className={styles.header_search}>
                <button
                    className={styles.search_button}
                    type='button'
                >
                    <SearchIcon />
                </button>
                {/*<input*/}
                {/*    type='search'*/}
                {/*    placeholder='Пошук місця розташування'*/}
                {/*    autoComplete='off'*/}
                {/*/>*/}
            </div>
        </header>
    )
};

export default HeaderTop;
