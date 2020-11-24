import {Dispatch} from 'redux';
import { LOGIN, LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAIL, LoginDispatchTypes } from './loginTypes';
import axios from 'axios';
import { Redirect } from 'react-router';

export const LoginUser = (formData: LOGIN) => async (dispatch: Dispatch<LoginDispatchTypes>) => {
    try{
        console.log('Inisde action');
        dispatch({type: LOGIN_LOADING});
        console.log(formData);
        const res = await axios.post(
            'http://localhost:3001/authentication/log-in/',
            {
                email: formData.email,
                password: formData.password
            }
            );
        console.log(res);
        dispatch({type: LOGIN_SUCCESS, payload: res.data})
    }
    catch(e){
        dispatch({type: LOGIN_FAIL})
    }
}
