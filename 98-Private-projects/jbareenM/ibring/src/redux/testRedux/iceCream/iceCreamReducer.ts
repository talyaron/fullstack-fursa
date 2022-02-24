import { BUY_ICE_CREAM } from "./iceCreamTypes";

interface iceCreamState{
    numOfIceCream: number;
}

const initialState:iceCreamState = {
    numOfIceCream: 20
}

interface iceCreamAction{
    type: string;
}

function iceCreamReducer(state:iceCreamState = initialState, action:iceCreamAction) {
    switch(action.type){
        case BUY_ICE_CREAM:
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - 1
            }
        default: return state;
    }
}

export default iceCreamReducer;