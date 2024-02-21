import React, {useMemo} from 'react';
import {NavLink} from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../assets/header/header-logo-icon.svg";
import {NavigationItem} from "../../types/NavigationItem";
import styles from './WeatherFooter.module.scss';

const WeatherFooter = () => {
    const footerTabs: NavigationItem[] = useMemo(
        () => [
            {
                text: 'політика конфіденційності',
                linkTo: '/politic',
                matchToLinkEnd: false,
            },
            {
                text: 'Користувацька угода',
                linkTo: '/user',
                matchToLinkEnd: false,
            },
            {
                text: 'контакти',
                linkTo: '/contacts',
                matchToLinkEnd: false,
            },
            {
                text: 'показники погоди',
                linkTo: '/weather',
                matchToLinkEnd: false,
            },
            {
                text: 'про проєкт',
                linkTo: '/about_us',
                matchToLinkEnd: false,
            },
            {
                text: 'налаштувати Cookie',
                linkTo: '/cookie',
                matchToLinkEnd: false,
            },
        ], []);
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_head}>
                <LogoIcon/>
            </div>

            <nav className={styles.footer_list}>
                {footerTabs.map(({ text, linkTo, matchToLinkEnd }) => (
                    <NavLink
                        key={text}
                        to={linkTo}
                        end={matchToLinkEnd}
                    >
                        {text}
                    </NavLink>
                ))}
            </nav>

            <p className={styles.footer_year}>© 2024 Open Harbor</p>
        </footer>
    )
};

export default WeatherFooter;