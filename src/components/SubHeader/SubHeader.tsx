import React, {useMemo} from 'react';
import { NavigationItem } from 'types/NavigationItem';
import NavigationTab from "../NavigationTab/NavigationTab";
import styles from './SubHeader.module.scss';

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
                linkTo: '/3_days',
                text: '3 days',
                matchToLinkEnd: false,
            },
            {
                linkTo: '/5_days',
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
