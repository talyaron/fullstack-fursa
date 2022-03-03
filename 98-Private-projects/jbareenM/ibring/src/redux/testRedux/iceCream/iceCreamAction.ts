import { BUY_ICE_CREAM } from "./iceCreamTypes"
// export{}

interface iceCreamAction{
    type: string;
}

export function buyIceCream() {
    const action:iceCreamAction = {
        type: BUY_ICE_CREAM
    }
    return action;
}