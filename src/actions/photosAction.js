import {
    PHOTOS_FETCH_SUCCEEDED,
    PHOTOS_FETCH_FAILED,
    PHOTOS_FETCH_REQUESTED
} from '../reducers/photosReducer';

export const photosFetchSucceeded = (photos) => {
    return {
        type: PHOTOS_FETCH_SUCCEEDED,
        photos
    }
}

export const photosFetchFailed = (message) => {
    return {
        type: PHOTOS_FETCH_FAILED,
        message
    }
}

export const photosFetchRequested = () => {
    return {
        type: PHOTOS_FETCH_REQUESTED
    }
}