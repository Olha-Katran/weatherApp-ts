import React, {useMemo, useState} from 'react';
import {Link} from "react-router-dom";
import {
    AiOutlineClose,
    AiOutlineHome, AiOutlineTransaction,
} from "react-icons/ai";
import {FaBars} from "react-icons/fa6";
import {AppNavigationItem} from "../../types/AppNavigationItem";
import styles from './MenuHamburger.module.scss';
import LanguageSwitcher from "../LanguageSwither/LanguageSwither";

type Props = {
    menuLight?: boolean;
};

const MenuHamburger:React.FC<Props> = ({ menuLight }) => {
    const [sidebar, setSidebar] = useState(false);

    const handleSidebar = () => {
        setSidebar(!sidebar);
    }

    const sidebarData: AppNavigationItem[] = useMemo(
        () => [
            {
                linkTo: '/cities',
                text: 'Погода в Україні',
                matchToLinkEnd: false,
                Icon: AiOutlineHome,
                mobileOnly: true,
            },
            {
                linkTo: '/world',
                text: 'Погода в світі',
                matchToLinkEnd: false,
                Icon: AiOutlineHome,
                mobileOnly: true,
            }, {
                linkTo: '/lang',
                text: 'store',
                matchToLinkEnd: false,
                Icon: AiOutlineHome,
                mobileOnly: true,
            }
        ], [],
    );

    return (
        <>
            <button
                type='button'
                aria-label='menu'
                onClick={handleSidebar}
                className={styles.menu_button}
            >
                <FaBars className={styles.menu_icon} />
            </button>
            <div className={`${styles.container} ${sidebar ? styles.active : ''}`}>
                <nav className={styles.nav_menu} id='sidebar'>
                    <header>

                    </header>
                    <button
                        type="button"
                        aria-label='menu'
                        onClick={handleSidebar}
                        className={styles.menu_button}
                    >
                        <AiOutlineClose className={styles.menu_icon} />
                    </button>
                    <ul>
                        {sidebarData.map(
                            ({linkTo, text, Icon, mobileOnly }) => (
                                <li
                                    key={text}
                                    className={styles.mobileOnly}
                                >
                                    <Icon className={styles.menu_icon} />
                                    <Link to={linkTo}>{text}</Link>
                                </li>
                            )
                        )}
                        <li>
                            <AiOutlineTransaction className={styles.menu_icon} />
                            <LanguageSwitcher language={} handleLanguageSelect={}
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
};

export default MenuHamburger;