import { BUY_CAKE } from "./CakeTypes"
// export{}

interface cakeAction{
    type: string;
    payload: number;
}

export function buyCake(number: number = 1) {
    const action:cakeAction = {
        type: BUY_CAKE,
        payload: number
    }
    return action;
}