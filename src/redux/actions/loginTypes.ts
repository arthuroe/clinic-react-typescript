export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export interface LOGIN {
    email: string;
    password: string;
}


interface loginLoading {
    type: typeof LOGIN_LOADING;
}

interface loginFail {
    type: typeof LOGIN_FAIL;
}

interface loginSuccess {
    type: typeof LOGIN_SUCCESS;
    payload: LOGIN
}

export type LoginDispatchTypes = loginLoading | loginSuccess | loginFail;