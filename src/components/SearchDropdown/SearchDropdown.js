import React from 'react';

const SearchDropdown = ({ show }) => {
    return (
        show && (
            <div
                className="search-dropdown">
                <h1>H1</h1>
            </div>
        )
    )
}

export default SearchDropdown;