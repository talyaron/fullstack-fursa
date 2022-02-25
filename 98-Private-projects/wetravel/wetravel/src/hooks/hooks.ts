import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type {AppDispatch, RootState } from "../store/store";
export const useAppDispatch = () => useDispatch();
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;  