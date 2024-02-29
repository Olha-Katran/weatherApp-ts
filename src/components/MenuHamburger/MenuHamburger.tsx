import React, {useMemo, useState} from 'react';
import {Link} from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa6";
import { MdTranslate } from "react-icons/md";
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import { IoEarthOutline } from "react-icons/io5";
import {AppNavigationItem} from "../../types/AppNavigationItem";
import LanguageSwitcher from "../LanguageSwither/LanguageSwither";
import useLanguageSwitch from "../../hooks/useLanguageSwitch";
import styles from './MenuHamburger.module.scss';

type Props = {
    menuLight?: boolean;
};

const MenuHamburger:React.FC<Props> = ({ menuLight }) => {
    const [sidebar, setSidebar] = useState(false);
    const { language, languageSwitch } = useLanguageSwitch();

    const handleSidebar = () => {
        setSidebar(!sidebar);
    }

    const sidebarData: AppNavigationItem[] = useMemo(
        () => [
            {
                linkTo: '/cities',
                text: 'Погода в Україні',
                matchToLinkEnd: false,
                Icon: LiaMapMarkerAltSolid ,
                mobileOnly: true,
            },
            {
                linkTo: '/world',
                text: 'Погода в світі',
                matchToLinkEnd: false,
                Icon: IoEarthOutline,
                mobileOnly: true,
            },
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
                            <MdTranslate  className={styles.menu_icon} />
                            <LanguageSwitcher
                                language={language}
                                handleLanguageSelect={languageSwitch}
                                isRadioButton={false}
                            />
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
};

export default MenuHamburger;