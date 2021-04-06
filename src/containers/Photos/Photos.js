import React, { useState } from 'react';
import Photo from '../../components/Photo/Photo';
import { morePhotosFetchRequested } from '../../actions/photosAction';
import LoadingIcon from '../../shared/icons/LoadingIcon/LoadingIcon';
import './Photos.scss';

const Photos = ({ photos, dispatch, isLoading }) => {
    const [state, setState] = useState({ page: 1 })

    const handleScroll = (e) => {
        const element = e.target;
        const { page } = state;

        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            dispatch(morePhotosFetchRequested(page));
            setState({ page: page + 1 })
        }
    }

    return (
        <div className="photos-wrapper" onScroll={handleScroll} style={{ height: '600px', overflowY: "scroll"}}>
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