import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILURE, USER_LOGOUT } from "../types/UserType";
import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { RootState } from "../store";

interface userAction {
    type: string;
    payload?: any
}

interface userIF {
    email: string;
    pass?: string;
}

export function fetchUserRequest() {
    const action: userAction = {
        type: FETCH_USER_REQUEST
    }
    return action;
}
export function fetchUserSuccess(user: userIF) {
    const action: userAction = {
        type: FETCH_USER_SUCCESS,
        payload: user
    }
    return action;
}
export function fetchUserFailure(error: string) {
    const action: userAction = {
        type: FETCH_USER_FAILURE,
        payload: error
    }
    return action;
}

export function LoginFetch(userInfo: userIF): ThunkAction<Promise<void>, RootState, unknown, AnyAction> {
    return async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
        try {
            dispatch(fetchUserRequest());
            const response = await fetch('/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: userInfo.email.toLowerCase(), pass: userInfo.pass })
            })
            const data = await response.json();
            if (data.ok) {
                const userData = data.user;
                console.log({data: userData})
                dispatch(fetchUserSuccess(userData));
                localStorage.setItem('userInfo', JSON.stringify(userData));
            }else{
                dispatch(fetchUserFailure(data.message));
            }
        } catch (error: any) {
            dispatch(fetchUserFailure(error.message));
        }
    }
}

export function LogOut(userInfo: userIF): ThunkAction<Promise<void>, RootState, unknown, AnyAction> {
    return async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
        try {
            dispatch({
                type: USER_LOGOUT
            });
            const response = await fetch('/user/logout');
            const data = await response.json();
            if (data.ok) {
                const userData = data.user;
                console.log({data: userData})
                dispatch(fetchUserSuccess(userData));
                localStorage.removeItem('userInfo');
            }else{
                dispatch(fetchUserFailure(data.message));
            }
        } catch (error: any) {
            dispatch(fetchUserFailure(error.message));
        }
    }
}

// export function LoginFetch(userInfo: userIF) {
//     return async (dispatch: Function) => {
//         dispatch(fetchUserRequest());
//         new Promise((resolve, reject) => {
//             fetch('/user/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ email: userInfo.email.toLowerCase(), pass: userInfo.pass })
//             }).then(r => r.json())
//                 .then(data => {
//                     if (data.ok) {
//                         resolve(dispatch(fetchUserSuccess(data.user)));
//                     } else {
//                         resolve(dispatch(fetchUserFailure(data.message)));
//                     }
//                 })
//                 .catch(err => reject(dispatch(fetchUserFailure(err.message))))
//         })
//     }
// }