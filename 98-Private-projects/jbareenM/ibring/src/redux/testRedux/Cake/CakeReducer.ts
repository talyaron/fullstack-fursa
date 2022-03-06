import { BUY_CAKE } from "./CakeTypes";

interface cakeState{
    numOfCakes: number;
}

const initialState:cakeState = {
    numOfCakes: 10
}

interface cakeAction{
    type: string;
    payload: number;
}

function cakeReducer(state:cakeState = initialState, action:cakeAction) {
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.payload
            }
        default: return state;
    }
}

export default cakeReducer;