// import { RootState } from '../../app/store';
// import { createSlice,PayloadAction } from "@reduxjs/toolkit"

// export interface userState {
//   value: {
//       fname: string;
//       lname: string;
//       email: string;
//   };
// }

// const initialState: userState = {
//   value: {
//     fname: "",
//     lname:"",
//     email: "",
//   },
// };

// export const userSlice = createSlice({
//   name: "userInfo",
//   initialState,
//   reducers: {
//     select: (state, action: PayloadAction<any>) => {
//         state.value = action.payload;
//   },
// }
// })
// export const { select } = userSlice.actions;
// export const selectUserInfo = (state: RootState) => state.userInfo;
// // export const userSelector = state => state.user
// export default userSlice.reducer;