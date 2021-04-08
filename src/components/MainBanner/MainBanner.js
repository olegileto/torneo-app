import React from 'react';
import './MainBanner.scss';

const MainBanner = ({ firstImage }) => {
    return (
        <div className="main-banner">
            <img src={firstImage} alt="banner"/>
        </div>
    )
}

export default MainBanner;