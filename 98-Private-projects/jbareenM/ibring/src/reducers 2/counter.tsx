interface actionIF{
    type: string;
    payload: number;
}

const counterReducer = (state:number = 0, action: actionIF) => {
    switch (action.type) {
        case 'increment':
            return state + action.payload;
        case 'decrement':
            return state - action.payload;
        default:
            return state;
    }
}

export default counterReducer;