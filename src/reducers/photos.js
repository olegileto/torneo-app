const initialState = {
    isLoading: false
}

export const PHOTOS_FETCH_SUCCEEDED = 'photos/PHOTOS_FETCH_SUCCEEDED';
export const PHOTOS_FETCH_FAILED = 'photos/PHOTOS_FETCH_FAILED';
export const PHOTOS_FETCH_REQUESTED = 'photos/PHOTOS_FETCH_REQUESTED';
export const MORE_PHOTOS_FETCH_SUCCEEDED = 'photos/MORE_PHOTOS_FETCH_SUCCEEDED';
export const MORE_PHOTOS_FETCH_FAILED = 'photos/MORE_PHOTOS_FETCH_FAILED';
export const MORE_PHOTOS_FETCH_REQUESTED = 'photos/MORE_PHOTOS_FETCH_REQUESTED';

export const photos = (state = initialState, action) => {
    switch (action.type) {
        case PHOTOS_FETCH_REQUESTED:
            return {...state, isLoading: true};
        case PHOTOS_FETCH_SUCCEEDED:
            return {...state, isLoading: false, photos: action.photos};
        case PHOTOS_FETCH_FAILED:
            return {...state, isLoading: false, error: action.message};
        case MORE_PHOTOS_FETCH_REQUESTED:
            return {...state, isLoading: true};
        case MORE_PHOTOS_FETCH_SUCCEEDED:
            const { newPhotos }  = action;
            const { photos } = state;

            return {
                ...state,
                photos: [...photos, ...newPhotos],
                isLoading: false
            }
        case MORE_PHOTOS_FETCH_FAILED:
            return {...state, isLoading: false, error: action.message};
        default:
            return state;
    }
}