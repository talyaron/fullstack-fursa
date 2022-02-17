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