export const increment = (num:number = 1) => {
    return {
        type: 'increment',
        payload: num
    }
}

export const decrement = (num:number = 1) => {
    return {
        type: 'decrement',
        payload: num
    }
}

export const signIn = (status:boolean = false) => {
    return {
        type: 'signIn',
        payload: status
    }
}