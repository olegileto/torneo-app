import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { photosFetchRequested, morePhotosFetchRequested } from '../../actions/photosAction';
import { getPhotos } from '../../selectors';
import Photos from '../Photos/Photos';
import './App.scss';

const App = () => {
    const [state, setState] = useState({ page: 1 })
    const photos = useSelector(getPhotos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(photosFetchRequested());
    }, [dispatch])

    const handleScroll = (e) => {
        const element = e.target;

        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            dispatch(morePhotosFetchRequested(state.page));
            setState({ page: state.page + 1 })
        }
    }

    return (
        <div className='app-container' onScroll={handleScroll} style={{ height: '600px', overflowY: 'scroll'}}>
            <Photos photos={photos}/>
        </div>
    )
};


export default App;