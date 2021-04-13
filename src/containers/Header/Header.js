import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import './Header.scss';
import TopHeaderPanel from '../TopHeaderPanel/TopHeaderPanel';

const Header = () => {
    return (
        <header className="header-container">
            <TopHeaderPanel />
            <Navigation />
        </header>
    )
}

export default Header;