import React from 'react';
import './Photo.scss';

const Photo = ({ photo }) => {
    return (
        <>
            <img src={photo.urls.regular} alt="photo"/>
        </>
    )
}

export default Photo;