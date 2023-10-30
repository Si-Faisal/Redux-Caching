import axios from 'axios'
import { GET_API_FAILED, GET_API_REQUEST, GET_API_SUCCESS } from '../PhotoApiConstants/PhotoApiConstants'

export const getAllPhoto = async (dispatch) => {
    
    dispatch({ type: GET_API_REQUEST });
    
    try {
        const res = await axios.get("https://restcountries.com/v3.1/all");

        dispatch({ type: GET_API_SUCCESS, payload: res.data });
    }
    catch (error) {
        dispatch({ type: GET_API_FAILED, payload: error.message });
        
    }
}