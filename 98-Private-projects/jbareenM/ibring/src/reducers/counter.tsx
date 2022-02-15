const counterReducer = (state = 0, action: any) => {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
    }
}

export default counterReducer;