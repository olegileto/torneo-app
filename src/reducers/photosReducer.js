const initialState = {
    loading: false
}

export const PHOTOS_FETCH_SUCCEEDED = 'PHOTOS_FETCH_SUCCEEDED';
export const PHOTOS_FETCH_FAILED = 'PHOTOS_FETCH_FAILED';
export const PHOTOS_FETCH_REQUESTED = 'PHOTOS_FETCH_REQUESTED';

export const photosReducer = (state = initialState, action) => {
    switch (action.type) {
        case PHOTOS_FETCH_REQUESTED:
            return {...state, loading: true};
        case PHOTOS_FETCH_SUCCEEDED:
            return {...state, loading: false, photos: action.photos};
        case PHOTOS_FETCH_FAILED: {
            return {...state, loading: false, error: action.message};
        }
        default:
            return state;
    }
}