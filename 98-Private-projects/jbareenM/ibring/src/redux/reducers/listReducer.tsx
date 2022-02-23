import { listTypes } from "../types/ListType";

interface listAction {
    type: string;
    payload?: any
}

interface ListIF {
    imgURL?: any;
    groupName?: string;
    meetType?: string;
    date?: Date;
    time?: Date;
    reminder?: string;
    place?: string;
    fewWords?: string;
}

export interface ListState {
    loading?: boolean,
    error?: string,
    listInfo: ListIF 
}

const initialListState: ListState = {
    listInfo: {}
}



export function ListReducer(state:ListState = initialListState, action:listAction){
    switch (action.type) {
        case listTypes.FETCH_LIST_REQUEST:
            return { loading: true };
        case listTypes.FETCH_LIST_SUCCESS:
            return {
                loading: false,
                listInfo: action.payload
            };
        case listTypes.FETCH_LIST_FAILURE:
            return {
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}