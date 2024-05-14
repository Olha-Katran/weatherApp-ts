import React, {useMemo} from 'react';
import { NavigationItem } from 'types/NavigationItem';
import NavigationTab from "../NavigationTab/NavigationTab";
import styles from './SubHeader.module.scss';
import BROWSER_ROUTES from "../../router/routes";

const SubHeader = () => {
    const navigationItems: NavigationItem[] = useMemo(
        () => [
            {
                linkTo: '/',
                text: 'Today',
                matchToLinkEnd: true,
            },
            {
                linkTo: '/tomorrow',
                text: 'Tomorrow',
                matchToLinkEnd: false,
            },
            {
                linkTo: `/${BROWSER_ROUTES.CURRENT_WEATHER}/${BROWSER_ROUTES.FORECAST}`,
                text: '5 days',
                matchToLinkEnd: false,
            },
        ], [],
    )

    return (
        <div className={styles.container}>
            <nav className={styles.header_days}>
                {navigationItems.map(({ linkTo, text, matchToLinkEnd }) => (
                    <NavigationTab
                        key={text}
                        linkTo={linkTo}
                        text={text}
                        matchToLinkEnd={matchToLinkEnd}
                    />
                ))}
            </nav>
        </div>
    );
}

export default SubHeader;
