import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
export interface userProps {
  name: string;
  email: string;
  phone?: string;
  img?: string;
}

const initialState: userProps = {
  name: "",
  email: "",
  phone: "",
  img: "",
};
export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.img = action.payload.img;
      state.name = action.payload.name;
      state.phone = action.payload.phone;
    },

    updateUser: (state, action) => {
      let nextState = { ...initialState };

      switch (action.type) {
        case "name":
          nextState = { ...initialState, name: action.payload.name };
          return nextState;

        case "phone":
          nextState = { ...initialState, phone: action.payload.phone };
          return nextState;

        case "email":
          // to be con...
          nextState = { ...initialState, email: action.payload.email };
          return nextState;
        default:
          return state;
      }
    },
  },
});

export const { setUser, updateUser } = userReducer.actions;
export const userName = (state: RootState) => state.user.name;
export const userEmail = (state: RootState) => state.user.email;
export const userPhone = (state: RootState) => state.user.phone;
export const userImg = (state: RootState) => state.user.img;

export default userReducer.reducer;
