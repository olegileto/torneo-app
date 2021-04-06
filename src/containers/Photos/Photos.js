import React from 'react';
import Photo from '../../components/Photo/Photo';
import LoadingIcon from '../../shared/icons/LoadingIcon/LoadingIcon';
import './Photos.scss';

const Photos = ({ photos, isLoading }) => {
    return (
        <div className="photos-wrapper">
            {photos && photos.map((photo, key) => {
               return (
                   <div className="photo" key={photo.id + key}>
                       <Photo photo={photo}/>
                   </div>
                   )
            })}
            {isLoading && <LoadingIcon />}
        </div>
    )
}

export default Photos;