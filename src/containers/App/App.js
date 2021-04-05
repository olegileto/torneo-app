import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { photosFetchRequested } from '../../actions/photosAction';
import { getPhotos } from '../../selectors';
import Photos from '../Photos/Photos';
import './App.scss';

const App = () => {
    const photos = useSelector(getPhotos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(photosFetchRequested());
    }, [dispatch])

    return (
        <div className='app-container'>
            <Photos photos={photos}/>
        </div>
    )
}

export default App;