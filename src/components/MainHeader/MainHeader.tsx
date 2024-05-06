import React, {useRef, useState} from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as SearchIcon } from '../../assets/header/search-icon.svg';
import { ReactComponent as SearchHideIcon } from '../../assets/header/arrow-to-left-icon.svg';
import MenuHamburger from "../MenuHamburger/MenuHamburger";
import Logo from "../../shared/Logo/Logo";
import Places from "../Places/Places";
import styles from './Header.module.scss';

type Props = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

const HeaderTop:React.FC<Props> = ({
    handleChange,
    value,
                                   }) => {
    const searchInputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter' || event.key === 'Escape') {
            setIsFocused(false);
            searchInputRef.current?.blur();
        }
    };

    return (
        <header className={styles.container}>
            <MenuHamburger />
            <Link to='/' className={styles.logo}>
               <Logo />
            </Link>
            <div className={styles.search_active}>
                <div className={styles.search_wrap}>
                    <form>
                        <div className={styles.search_hide}>
                            <SearchHideIcon />
                        </div>
                    </form>
                </div>
            </div>

            <div className={styles.header_search}>
                <div className={styles.searchField}>
                    <SearchIcon />
                    <Places />
                    {/*<input*/}
                    {/*    ref={searchInputRef}*/}
                    {/*    id='search'*/}
                    {/*    name='search'*/}
                    {/*    type='text'*/}
                    {/*    placeholder='Enter a town'*/}
                    {/*    aria-label='Search'*/}
                    {/*    onFocus={() => setIsFocused(true)}*/}
                    {/*    onBlur={() => setIsFocused(false)}*/}
                    {/*    onKeyDown={handleKeyDown}*/}
                    {/*    onChange={handleChange}*/}
                    {/*    value={value}*/}
                    {/*/>*/}
                </div>
            </div>
        </header>
    )
};

export default HeaderTop;
