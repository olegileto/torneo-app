import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { morePhotosFetchRequested, photosFetchRequested } from '../../actions/photosAction';
import { getLoadingStatus, getPhotos } from '../../selectors';
import Photos from '../Photos/Photos';
import Header from '../Header/Header';
import { throttle } from 'lodash';
import { THROTTLE } from '../../helpers/utils';
import './App.scss';

const App = () => {
    const [state, setState] = useState({ page: 1 })
    const photos = useSelector(getPhotos);
    const isLoading = useSelector(getLoadingStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(photosFetchRequested());
    }, [dispatch])

    const handleScroll = throttle((e) => {
        const element = e.target;
        const { page } = state;

        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            dispatch(morePhotosFetchRequested(page));
            setState({ page: page + 1 })
        }
    }, THROTTLE);

    return (
        <div className='app-container' onScroll={handleScroll}>
            <Header />
            <Photos
                photos={photos}
                isLoading={isLoading}
            />
        </div>
    )
};

export default App;