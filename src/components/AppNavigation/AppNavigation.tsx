import React, {useMemo} from 'react';
import {NavLink} from "react-router-dom";
import {AppNavigationItem} from "../../types/AppNavigationItem";
import BROWSER_ROUTES from "../../router/routes";
import AppNavigationTodayIcon from "../AppNavigationIcon/AppNavigationTodayIcon";
import AppNavigationTomorrowIcon from "../AppNavigationIcon/AppNavigationTomorrowIcon";
import AppNavigationMonthIcon from "../AppNavigationIcon/AppNavigationMonthIcon";
import styles from './AppNavigation.module.scss';

const AppNavigation = () => {
    const auth = true;
    const navigationItems: AppNavigationItem[] = useMemo(
        () => [
            {
                linkTo: `${BROWSER_ROUTES.MAIN}/${BROWSER_ROUTES.TODAY}`,
                Icon: AppNavigationTodayIcon,
                text: 'Today',
                matchToLinkEnd: false,
                display: true,
            },
            // {
            //     linkTo: `${BROWSER_ROUTES.MAIN}/${BROWSER_ROUTES.TOMORROW}`,
            //     Icon: AppNavigationTomorrowIcon,
            //     text: 'Tomorrow',
            //     matchToLinkEnd: false,
            //     display: true,
            // },
            {
                linkTo: `${BROWSER_ROUTES.MAIN}/${BROWSER_ROUTES.MONTH}`,
                Icon: AppNavigationMonthIcon,
                text: 'Month',
                matchToLinkEnd: false,
                display: true,
            }
        ],
        [],
    );

    return (
        <>
            <div className={`${styles.container}`}>
                <nav className={styles.navigation_bar} id="bottombar">
                    {navigationItems.map(
                        ({ Icon, linkTo, text, desktopOnly, display, matchToLinkEnd }) =>
                            display && (
                                <NavLink
                                    key={linkTo}
                                    to={linkTo}
                                    className={`${styles.navigation_item} `}
                                    end={matchToLinkEnd}
                                >
                                    {({ isActive }) => (
                                        <div className={isActive ? styles.activeWrap : ''}>
                                            <Icon active={isActive} />
                                            <span className={isActive ? styles.activeTab : ''}>
                                                {text}
                                            </span>
                                        </div>
                                    )}
                                </NavLink>
                            ),
                    )}
                </nav>
            </div>
        </>
    )
};

export default AppNavigation;