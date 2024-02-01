import React from 'react';
import { ReactComponent as LogoIcon } from '../../assets/header/header-logo-icon.svg';

const MainHeader = () => {
    return (
        <header className='bg-gray-500'>
            <LogoIcon />
            <h1>Header</h1>
        </header>
    )
};

export default MainHeader;
