interface actionIF{
    type: string;
    payload: boolean;
}

const loggedReducer = (state:boolean = false, action: actionIF) => {
    switch (action.type) {
        case 'signIn':
            return !state;
        default:
            return state;
    }
}

export default loggedReducer;