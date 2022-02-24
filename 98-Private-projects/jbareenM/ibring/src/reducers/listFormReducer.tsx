import { listenerCount } from "process";

interface listFormIF {
    groupName: string;
    meetType: string;
    date: Date;
    time: Date;
    reminder: string;
    place: string;
    fewWords: string;
}

interface actionIF {
    type: string;
    payload: listFormIF;
}

interface stateIF {
    list: listFormIF;
}

const listFormReducer = (state: stateIF = {
    list: {
        groupName: "",
        meetType: "",
        date: new Date(),
        time: new Date(),
        reminder: "",
        place: "",
        fewWords: "",
    }
}, action: actionIF) => {
    switch (action.type) {
        case 'listFormAction':
            state.list = action.payload;
            return state;
        default:
            return state;
    }
}

export default listFormReducer;