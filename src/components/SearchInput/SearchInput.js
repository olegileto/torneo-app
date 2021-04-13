import React from 'react';
import CloseIcon from '@material-ui/icons/Close';

const SearchInput = ({ placeholder }) => {
    return (
        <div className="input-wrapper">
            <input className="search-input" placeholder={placeholder} type="text"/>
            <CloseIcon className="close-icon"/>
            <div className="delimiter"/>
        </div>
    )
}

export default SearchInput;