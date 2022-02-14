const loggedReducer = (state:boolean = false, action: any) => {
    switch (action.type) {
        case 'signIn':
            return !state;
        default: 
        return state;
    }
}

export default loggedReducer;