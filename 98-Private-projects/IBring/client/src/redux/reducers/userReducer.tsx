import { userTypes } from "../types/UserType";

export interface UserState {
    loading?: boolean,
    error?: string,
    userInfo: { email?: string }
}

interface userIF {
    email?: string;
}

interface stateReducer {
    loading: boolean;
    user: userIF;
    error: string;
    status: boolean;
}

const initialState: stateReducer = {
    loading: false,
    user: {},
    error: "",
    status: false
}


interface userAction {
    type: string;
    payload?: any
}

const initialUserState: UserState = {
    userInfo: {}
}

export function userLoginReducer(state: UserState = initialUserState, action: userAction) {
    switch (action.type) {
        case userTypes.FETCH_USER_REQUEST:
            return { loading: true };
        case userTypes.FETCH_USER_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload
            };
        case userTypes.FETCH_USER_FAILURE:
            return {
                loading: false,
                error: action.payload
            };
        case userTypes.USER_LOGOUT:
            return {};
        default:
            return state;
    }
}

function userReducer(state: stateReducer = initialState, action: userAction) {
    switch (action.type) {
        case userTypes.FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true,
                user: {},
                error: "",
                status: false
            }
        case userTypes.FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: "",
                status: true
            }
        case userTypes.FETCH_USER_FAILURE:
            return {
                ...state,
                loading: false,
                user: {},
                error: action.payload,
                status: false
            }
        default: return state;
    }
}

export default userReducer;