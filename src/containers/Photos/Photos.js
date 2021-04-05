import React from 'react';
import Photo from '../../components/Photo/Photo';
import './Photos.scss';

const Photos = ({ photos }) => {
    return (
        <div className="photos-wrapper">
            {photos && photos.map((photo) => {
               return (
                   <div className="photo" key={photo.id}>
                       <Photo photo={photo}/>
                   </div>
                   )
            })}
        </div>
    )
}

export default Photos;