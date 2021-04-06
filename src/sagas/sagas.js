import { all } from 'redux-saga/effects';
import { photosWatcherSaga } from './photosSaga';

function* sagas() {
   yield all([
       photosWatcherSaga()
   ])
}

export default sagas;