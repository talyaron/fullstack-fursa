import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./UserTypes";

interface userAction {
    type: string;
    payload?: any;
}

export function fetchUsersRequest() {
    const action: userAction = {
        type: FETCH_USER_REQUEST
    }
    return action;
}

export function fetchUsersSuccess(users: any) {
    const action: userAction = {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
    return action;
}

export function fetchUsersFailure(error: any) {
    const action: userAction = {
        type: FETCH_USER_FAILURE,
        payload: error
    }
    return action;
}

export function fetchUsers() {
    return (dispatch: Function) => {
        new Promise((resolve, reject) => {
            dispatch(fetchUsersRequest());
            fetch("https://jsonplaceholder.typicode.com/users")
                .then(r => r.json())
                .then(data => {
                    const users = data;
                    resolve(dispatch(fetchUsersSuccess(users)));
                })
                .catch(error => {
                    const errorMsg = error.message;
                    reject(dispatch(fetchUsersFailure(errorMsg)));
                })
        })
    }
}