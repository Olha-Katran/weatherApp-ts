import { t } from 'i18next';
import React, {useMemo} from 'react';
import styles from './AppNavigation.module.scss';
import {AppNavigationItem} from "../../types/AppNavigationItem";
import AppNavigationTodayIcon from "../AppNavigationTodayIcon/AppNavigationTodayIcon";
import {NavLink} from "react-router-dom";

const AppNavigation = () => {
    const auth = true;
   // const showUserTabs = !!auth;
    const navigationItems: AppNavigationItem[] = useMemo(
        () => [
            {
                linkTo: '/',
                Icon: AppNavigationTodayIcon,
                text: 'Today',
                matchToLinkEnd: false,
                display: true,
            }
        ],
        [],
    );

    return (
        <>
            <div className={`${styles.container} ${!auth && styles.unauthorized}`}>
                <nav className={styles.navigation_bar} id="bottombar">
                    <div className={styles.desktop_only}>
                        {/*<Logo light={false} />*/}
                    </div>
                    {navigationItems.map(
                        ({ Icon, linkTo, text, desktopOnly, display, matchToLinkEnd }) =>
                            display && (
                                <NavLink
                                    key={linkTo}
                                    to={linkTo}
                                    className={`${styles.navigation_item} ${
                                        !!desktopOnly && styles.desktop_only
                                    }`}
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
                    {/*{auth || devAccess ? null : (*/}
                    {/*    <NavLink*/}
                    {/*        to='/'*/}
                    {/*        className={`${styles.navigation_item} ${styles.desktop_only} ${styles.link_btn}`}*/}
                    {/*    >*/}
                    {/*        <Button*/}
                    {/*            name={t('auth.sign_in')}*/}
                    {/*            size="medium"*/}
                    {/*            design={GamePriceButtonDesign.primary}*/}
                    {/*        />*/}
                    {/*    </NavLink>*/}
                    {/*)}*/}
                    {/*<div className={`${styles.desktop_only} ${styles.menu}`}>*/}
                    {/*    <MenuHamburger />*/}
                    {/*</div>*/}
                </nav>
            </div>
        </>
    )
};

export default AppNavigation;