import { GET_API_FAILED, GET_API_REQUEST, GET_API_SUCCESS } from "../PhotoApiConstants/PhotoApiConstants";

const initialState = {
    isLoading: false,
    photos: [],
    error: null
};


export const PhotoApiReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_API_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_API_SUCCESS:
            return {
                ...state,
                isLoading: false,
                photos: action.payload,
                error: null
            }
        
        case GET_API_FAILED:
            return {
                ...state,
                isLoading: false,
                photos: [],
                error: action.payload
            }
    
        default:
            return state;
    }  
}