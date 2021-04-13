import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import FilterCenterFocusIcon from '@material-ui/icons/FilterCenterFocus';
import SearchInput from '../SearchInput/SearchInput';
import SearchDropdown from '../SearchDropdown/SearchDropdown';

const Search = () => {
    const [show, setShow] = useState(false);

    const handleCLick = () => {
        setShow(true);
    }

    return (
        <div className="search" onClick={handleCLick}>
            <SearchIcon />
            <SearchInput
                placeholder="Search high-resolution photos"
            />
            <FilterCenterFocusIcon />
            <SearchDropdown
                show={show}
            />
        </div>
    )
}

export default Search;