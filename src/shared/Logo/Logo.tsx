import { t } from 'i18next';
import React from 'react';
import { ReactComponent as LogoIcon } from '../../assets/header/header-logo-icon.svg';
import styles from './Logo.module.scss';

type Props = {
    lightLogo?: boolean;
}

const Logo:React.FC<Props> = ({ lightLogo = false }) => (
    <>
        <LogoIcon className={lightLogo ? styles.light : styles.dark} />
        <a
            href={'/ua'}
            className={`${styles.title} ${lightLogo && styles.light}`}
        >
            {t('home.title')}
        </a>
    </>
);

export default Logo;