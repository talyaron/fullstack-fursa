import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./UserTypes";

interface userState {
    loading: boolean;
    users: Array<any>;
    error: string;
}

const initialState: userState = {
    loading: false,
    users: [],
    error: ""
}

interface userAction {
    type: string;
    payload: any;
}

function userReducer(state: userState = initialState, action: userAction) {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ""
            }
        case FETCH_USER_FAILURE:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }
        default: return state;
    }
}

export default userReducer;