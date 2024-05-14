import React from 'react';
import {NavLink} from "react-router-dom";
import { NavigationItem } from "../../types/NavigationItem";
import { ReactComponent as ArrowIcon } from '../../assets/header/arrow-to-right-icon.svg';
import styles from './NavigationTab.module.scss';

const NavigationTab: React.FC<NavigationItem> = ({
    linkTo, text, matchToLinkEnd
}) => (
    <NavLink
        to={linkTo}
        id={text}
        end={matchToLinkEnd}
        className={({ isActive }) =>
            `${styles.navigation_tab} ${isActive && styles.active_tab}`
        }
    >
        {text}
        <ArrowIcon />
    </NavLink>
);

export default NavigationTab;