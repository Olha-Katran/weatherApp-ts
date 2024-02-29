import React from 'react';
import styles from './LanguageSwither.module.scss';

type Props = {
    language: string;
    handleLanguageSelect: () => void;
    isRadioButton?: boolean;
};

const LanguageSwitcher:React.FC<Props> = ({
    language,
    handleLanguageSelect,
    isRadioButton,
                                          }) => (
    <section className={isRadioButton ? styles.layout : styles.empty}>
        <label className={styles.item}>
            en
            <input
                type='radio'
                name='language'
                value='en'
                checked={language === 'en'}
                onChange={handleLanguageSelect}
                className={styles.custom_radio}
            />
        </label>
        <label className={styles.item}>
            ua
            <input
                type='radio'
                name='language'
                value='ua'
                checked={language === 'ua'}
                onChange={handleLanguageSelect}
                className={styles.custom_radio}
            />
        </label>
    </section>
);

export default LanguageSwitcher;