import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../../../../../../04-React/06-redux-toolkit/example/src/features/counter/counterSlice';
import textReducer from '../../../../../../04-React/06-redux-toolkit/example/src/features/text/textSlice';

export const store = configureStore({
  reducer: {
   
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
