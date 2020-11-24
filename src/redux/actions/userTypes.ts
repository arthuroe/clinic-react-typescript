export const USERS_LOADING = 'USERS_LOADING';
export const USERS_SUCCESS = 'USERS_SUCCESS';
export const USERS_FAIL = 'USERS_FAIL';

export type userType = {
    users: User[]
}

interface usersLoading {
    type: typeof USERS_LOADING;
}

interface usersFail {
    type: typeof USERS_FAIL;
}

interface User {
    name: string;
}

interface usersSuccess {
    type: typeof USERS_SUCCESS;
    payload: userType
}

export type userDispatchTypes = usersLoading | usersSuccess | usersFail;