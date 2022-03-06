export const increment = (num: number = 1) => {
    return {
        type: 'increment',
        payload: num
    }
}

export const decrement = (num: number = 1) => {
    return {
        type: 'decrement',
        payload: num
    }
}

interface payloadIF {
    status: boolean;
    user?: object;
}
export const signIn = (payload: payloadIF = { status: false, user: undefined }) => {
    return {
        type: 'signIn',
        payload: payload
    }
}

interface listFormIF {
    groupName: string;
    meetType: string;
    date: Date;
    time: Date;
    reminder: string;
    place: string;
    fewWords: string;
}

export const listFormAction = (payload: listFormIF = {
    groupName: "",
    meetType: "",
    date: new Date(),
    time: new Date(),
    reminder: "",
    place: "",
    fewWords: "",
}) => {
    return {
        type: 'listFormAction',
        payload: payload
    }
}