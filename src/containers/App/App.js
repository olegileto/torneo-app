import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { morePhotosFetchRequested, photosFetchRequested } from '../../actions/photosAction';
import { getLoadingStatus, getPhotos } from '../../selectors';
import Photos from '../Photos/Photos';
import Header from '../Header/Header';
import { throttle } from 'lodash/fp';
import { THROTTLE } from '../../helpers/utils';
import './App.scss';

const App = () => {
    const photos = useSelector(getPhotos);
    const isLoading = useSelector(getLoadingStatus);
    const dispatch = useDispatch();
    let page = 1;

    useEffect(() => {
        dispatch(photosFetchRequested());
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [dispatch])

    const handleScroll = throttle(THROTTLE, () => {
        if ((window.innerHeight + window.pageYOffset + 400) >= (document.body.offsetHeight + 400)) {
            page++;
            dispatch(morePhotosFetchRequested(page));
        }
    });

    return (
        <div className='app-container'>
            <Header />
            <Photos
                photos={photos}
                isLoading={isLoading}
            />
        </div>
    )
};

export default App;