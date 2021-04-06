import { takeEvery, takeLatest } from 'redux-saga/effects';
import {MORE_PHOTOS_FETCH_REQUESTED, PHOTOS_FETCH_REQUESTED } from '../reducers/photosReducer';
import { fetchPhotos, moreFetchPhotos } from './photosSaga';

function* sagas() {
    yield takeLatest(PHOTOS_FETCH_REQUESTED, fetchPhotos);
    yield takeEvery(MORE_PHOTOS_FETCH_REQUESTED, moreFetchPhotos)
}

export default sagas;