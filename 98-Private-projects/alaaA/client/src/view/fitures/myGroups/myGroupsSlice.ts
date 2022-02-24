
 
 interface mygroup{
     id: string
     groupName: string
 }

 interface mygroups{
    arr:Array<mygroup>
 }

const initialState:mygroups={
    arr : []
}

export const mygroupsReducer= createSlice({
    
})
