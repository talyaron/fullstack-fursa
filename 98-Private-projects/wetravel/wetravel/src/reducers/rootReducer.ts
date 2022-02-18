import { configureStore, PayloadAction } from "@reduxjs/toolkit";
import { Action, combineReducers, Reducer } from "redux";

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};



export const reducer: Reducer<CounterState, Action> = (
  state: CounterState = initialState,
  action: Action
) => {
  const nextState = {
    count: state.count,
  };
  switch (action.type) {
    case "INC":
      nextState.count = state.count + 1;
      return nextState;
    case "DEC":
      nextState.count = state.count - 1;
      return nextState;
    default:
      return state;
  }
};
const reducers  = combineReducers({
  counter : reducer
})
export type State = ReturnType<typeof reducers>
export default reducers
