import { call, put } from 'redux-saga/effects';
import { photosFetchSucceeded, photosFetchFailed } from '../actions/photosAction';
import Api from '../helpers/serviceWorkers';

export function* fetchPhotos() {
    try {
        const photos = yield call(Api.fetchPhotos);
        yield put(photosFetchSucceeded(photos));
    } catch (e) {
        yield put(photosFetchFailed(e.message));
    }
}