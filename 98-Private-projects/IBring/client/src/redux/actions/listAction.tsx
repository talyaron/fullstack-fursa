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


export function fetchListRequest() {
    const action: listAction = {
        type: listTypes.FETCH_LIST_REQUEST
    }
    return action;
}

export function fetchListSuccess(list: ListIF) {
    const action: listAction = {
        type: listTypes.FETCH_LIST_SUCCESS,
        payload: list
    }
    return action;
}

export function fetchListFailure(error: string) {
    const action: listAction = {
        type: listTypes.FETCH_LIST_FAILURE,
        payload: error
    }
    return action;
}