import { createSlice } from '@reduxjs/toolkit'

interface stateActions {
    user: {firstname: string, lastname: string, email: string},
  gender:string,
  maingoal:string,
  activity:string,
  age:string,
  height:string,
  weight:string,
  exercises:Array<any>,
  time: string,
  selectedExercises: Array<any>,
  myplans:Array<any>,
}

export const initialState:stateActions = {
  user: {firstname: "", lastname: "", email: ""},
  gender:"",
  maingoal:"",
  activity:"",
  age:"",
  height:"",
  weight:"",
  exercises:[],
  time: "",
  selectedExercises: [],
  myplans:[],
}

export const AppSlice = createSlice({
  name: 'AppSlice',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user.firstname = action.payload.firstname;
      state.user.lastname = action.payload.lastname;
      state.user.email = action.payload.email;
    },
    setfirstName:(state, action) => {
        state.user.firstname = action.payload;
    },
    setLastName:(state, action) => {
        state.user.lastname = action.payload;
    },
    setEmail:(state, action) => {
        state.user.email = action.payload;
    },
    setGender:(state, action) => {
        state.gender = action.payload;
    },
    setMainGoal:(state, action) => {
        state.maingoal = action.payload;
    },
    setActivity:(state, action) => {
        state.activity = action.payload;
    },
    setAge:(state, action) => {
        state.age = action.payload;
    },
    setHeight:(state, action) => {
        state.height = action.payload;
    },
    setWeight:(state, action) => {
        state.weight = action.payload;
    },
    setExercises:(state, action) => {
        state.exercises = action.payload;
    },
    SetselectedExercises:(state,action) => {
        state.selectedExercises = action.payload;
    },
    SetTime:(state,action) => {
        state.time = action.payload;
    },
    addMyplans:(state,action) => {
        const exercies:any = [];
        state.exercises.forEach((elem:any) => {
            if(state.selectedExercises.includes(elem.id)){
                exercies.push(elem);
            }
        })
        const name = action.payload;
        const time = state.time;
        state.myplans.push( {name: name,time: time,exercies : exercies});
    
    },
  },
})

// Action creators are generated for each case reducer function
export const { SetTime,addMyplans, SetselectedExercises,setUser,setfirstName,setLastName,setEmail,setGender,setMainGoal,setActivity,setAge,setHeight,setWeight,setExercises } = AppSlice.actions

export default AppSlice.reducer