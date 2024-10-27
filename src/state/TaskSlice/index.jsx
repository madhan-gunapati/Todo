import { createSlice } from "@reduxjs/toolkit";

const TaskSlice = createSlice({
    name:'TaskSlice',
    initialState:{
        tasks:[]
    },
    reducers:{
        addTask:(state, action)=>{
            state.tasks.push(action.payload)
            
        }
    }
})
export const  {addTask} = TaskSlice.actions;

export default TaskSlice.reducer;