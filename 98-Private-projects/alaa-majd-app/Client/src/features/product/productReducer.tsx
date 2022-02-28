import { createSlice} from "@reduxjs/toolkit"

export interface productState {
    id: number;
    name: string;
    price: number;
    catagory: string;
    amount:string;
    quantity: number;
    description: string;
    Url: string;
    status: 'idle' | 'loading' | 'failed';
}
const initialState:productState={
    id: 0,
    name: "",
    price: 0,
    catagory: "",
    amount:"",
    quantity: 0,
    description: "",
    Url: "",
    status:'idle'
}

export const productReducer = createSlice({
    name:"product",
    initialState,
    reducers:{
        edit:(state,action)=>{
            state.id = action.payload[0];
            state.name=action.payload[1];
            state.price=action.payload[2];
            state.catagory = action.payload[3];
            state.amount=action.payload[4];
            state.quantity=action.payload[5];
            state.description = action.payload[6];
            state.Url=action.payload[7];
            // state.status=action.payload[3];
        },
        logout:(state)=>{
            
        },

    },
})

export const {edit , logout} = productReducer.actions;

export const selectproduct = (state:any) => state.product.product;

export default productReducer.reducer;