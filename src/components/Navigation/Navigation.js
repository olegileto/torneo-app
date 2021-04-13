import React from 'react';
import './Navigation.scss';

const Navigation = () => {
    return (
        <nav>
            <ul className="navigation-panel">
                <li className="active">Home</li>
                <li>Account</li>
            </ul>
        </nav>
    )
}

export default Navigation;