import { createSlice} from "@reduxjs/toolkit"

export interface userState {
    ID:string;
    password: string;
    loggedIn: boolean;
    status: 'idle' | 'loading' | 'failed';
}
const initialState:userState={
    ID:"",
    password:"",
    loggedIn:true,
    status:'idle'
}

export const userReducer = createSlice({
    name:"user",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.ID = action.payload[0];
            state.password=action.payload[1];
            state.loggedIn=action.payload[2];
            // state.status=action.payload[3];
        },
        logout:(state)=>{
            
        },

    },
})

export const {login , logout} = userReducer.actions;

export const selectUser = (state:any) => state.user.user;

export default userReducer.reducer;