import {changeLanguage} from "i18next";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import i18n, {LANGUAGE_KEY} from 'localization';

const useLanguageSwitch = () => {
    const [language, setLanguage] = useState<string>(i18n.language);
    const navigate = useNavigate();

    const languageSwitch = () => {
        const changeTo = language === 'en' ? 'ua' : 'en';
        setLanguage(changeTo);

        changeLanguage(changeTo)
            .then(() => {
                localStorage.setItem(LANGUAGE_KEY, changeTo);
                navigate(0);
            })
            .catch(error => {
            console.error('Error while changing language:', error)
            })
    }

    return { language, languageSwitch};
};

export default useLanguageSwitch;