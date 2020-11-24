import {userType, userDispatchTypes, USERS_SUCCESS, USERS_LOADING, USERS_FAIL } from '../actions/userTypes';

interface DefaultState {
    loading: boolean;
    users?: userType;
};

const defaultState: DefaultState = {
    loading: false,
};

const userReducer = (state: DefaultState = defaultState, action: userDispatchTypes): DefaultState => {
    switch (action.type) {
        case USERS_FAIL:
            return {
                loading: false,
            }
        case USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload
            }
        case USERS_LOADING:
            return {
                loading: true,
            }
        default:
            return state;
    }
}

export default userReducer;