import {Dispatch} from 'redux';
import { USERS_LOADING, USERS_SUCCESS, USERS_FAIL, userDispatchTypes } from './userTypes';
import axios from 'axios';

export const GetUsers = () => async (dispatch: Dispatch<userDispatchTypes>) => {
    try{
        dispatch({type: USERS_LOADING});

        const res = await axios.get('http://localhost:3001/users/')

        dispatch({type: USERS_SUCCESS, payload: res.data})
    }
    catch(e){
        dispatch({type: USERS_FAIL})
    }
}