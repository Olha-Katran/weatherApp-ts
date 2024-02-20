import React, {useMemo} from 'react';
import { NavigationItem } from 'types/NavigationItem';
import SubHeaderLocation from "../SubHeaderLocation/SubHeaderLocation";
import styles from './SubHeader.module.scss';
import NavigationTab from "../NavigationTab/NavigationTab";

const SubHeader = () => {
    const navigationItems: NavigationItem[] = useMemo(
        () => [
            {
                linkTo: '/',
                text: 'Today',
                matchToLinkEnd: true,
            },
            {
                linkTo: '/month',
                text: 'Month',
                matchToLinkEnd: false,
            },
            {
                linkTo: '/tomorrow',
                text: 'Tomorrow',
                matchToLinkEnd: false,
            },
            {
                linkTo: '/weekend',
                text: 'weekend',
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
            {
                linkTo: '/week',
                text: 'week',
                matchToLinkEnd: false,
            },
            {
                linkTo: '/10_days',
                text: '10 days',
                matchToLinkEnd: false,
            },
            {
                linkTo: '/archive',
                text: 'Archive',
                matchToLinkEnd: false,
            },

        ], [],
    )

    return (
        <div className={styles.container}>
            <SubHeaderLocation />
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
