import { takeEvery } from 'redux-saga/effects';
import { PHOTOS_FETCH_REQUESTED } from '../reducers/photosReducer';
import { fetchPhotos } from './photosSaga';

function* sagas() {
    yield takeEvery(PHOTOS_FETCH_REQUESTED, fetchPhotos);
}

export default sagas;