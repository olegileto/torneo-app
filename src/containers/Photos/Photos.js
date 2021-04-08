import React from 'react';
import Photo from '../../components/Photo/Photo';
import LoadingIcon from '../../shared/icons/LoadingIcon/LoadingIcon';
import './Photos.scss';

const Photos = ({ photos }) => {
    return (
        <div className="photos-wrapper">
            {photos && photos.map((photo, key) => {
               return (
                   <div className="photo" key={photo.id + key}>
                       <Photo photo={photo}/>
                   </div>
                   )
            })}
        </div>
    )
}

export default Photos;