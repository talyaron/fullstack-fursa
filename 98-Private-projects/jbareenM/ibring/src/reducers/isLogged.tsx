interface actionIF {
    type: string;
    payload: {
        status: boolean;
        user?: object;
    };
}

interface stateIF {
    status: boolean;
    user?: object;
}

const loggedReducer = (state: stateIF = {status: false, user: undefined}, action: actionIF) => {
    switch (action.type) {
        case 'signIn':
            state.status = true;
            state.user = action.payload.user;
            return state;
        default:
            return state;
    }
}

export default loggedReducer;