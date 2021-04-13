import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import FilterCenterFocusIcon from '@material-ui/icons/FilterCenterFocus';
import SearchInput from '../SearchInput/SearchInput';

const Search = () => {
    return (
        <div className="search">
            <SearchIcon />
            <SearchInput
                placeholder="Search high-resolution photos"
            />
            <FilterCenterFocusIcon />
        </div>
    )
}

export default Search;