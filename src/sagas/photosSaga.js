import { call, put, delay } from 'redux-saga/effects';
import {
    photosFetchSucceeded,
    photosFetchFailed,
    morePhotosFetchSucceeded,
    morePhotosFetchFailed
} from '../actions/photosAction';
import Api from '../helpers/serviceWorkers';

export function* fetchPhotos() {
    try {
        const photos = yield call(Api.fetchPhotos);
        yield put(photosFetchSucceeded(photos));
    } catch (e) {
        yield put(photosFetchFailed(e.message));
    }
}

export function* moreFetchPhotos(action) {
    const { page } = action;
    console.log('page', page);

    try {
        const photos = yield call(Api.fetchPhotos, page)
        yield delay(1000);
        yield put(morePhotosFetchSucceeded(photos));
    } catch (e) {
        yield put(morePhotosFetchFailed(e.message))
    }
}