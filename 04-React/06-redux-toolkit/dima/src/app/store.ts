import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import itemReducer from '../view/features/item/itemSlice';
import recipesReducer from '../view/features/myRecipes/MyRecipes';

export const store = configureStore({
  reducer: {
    item : itemReducer,
    recipesArray : recipesReducer,
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
