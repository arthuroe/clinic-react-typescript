import {LOGIN, LoginDispatchTypes, LOGIN_SUCCESS, LOGIN_LOADING, LOGIN_FAIL } from '../actions/loginTypes';

interface DefaultState {
    submitting: boolean;
    userData?: LOGIN;
};

const defaultState: DefaultState = {
    submitting: false,
};

const LoginReducer = (state: DefaultState = defaultState, action: LoginDispatchTypes): DefaultState => {
    switch (action.type) {
        case LOGIN_FAIL:
            return {
                submitting: false,
            }
        case LOGIN_SUCCESS:
            return {
                submitting: false,
                userData: action.payload
            }
        case LOGIN_LOADING:
            return {
                submitting: true,
            }
        default:
            return state;
    }
}

export default LoginReducer;