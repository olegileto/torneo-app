import {call, put, delay, takeLatest, takeEvery } from 'redux-saga/effects';
import {
    photosFetchSucceeded,
    photosFetchFailed,
    morePhotosFetchSucceeded,
    morePhotosFetchFailed
} from '../actions/photosAction';
import Api from '../helpers/serviceWorkers';
import { MORE_PHOTOS_FETCH_REQUESTED, PHOTOS_FETCH_REQUESTED } from '../reducers/photosReducer';

function* fetchPhotos() {
    try {
        const photos = yield call(Api.fetchPhotos);
        yield put(photosFetchSucceeded(photos));
    } catch (e) {
        yield put(photosFetchFailed(e.message));
    }
}

function* moreFetchPhotos(action) {
    const { page } = action;

    try {
        const photos = yield call(Api.fetchPhotos, page)
        yield delay(1000);
        yield put(morePhotosFetchSucceeded(photos));
    } catch (e) {
        yield put(morePhotosFetchFailed(e.message))
    }
}

export function* photosWatcherSaga() {
    yield takeLatest(PHOTOS_FETCH_REQUESTED, fetchPhotos);
    yield takeEvery(MORE_PHOTOS_FETCH_REQUESTED, moreFetchPhotos)
}