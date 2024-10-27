import { configureStore } from "@reduxjs/toolkit";
import TaskSliceReducer from "../TaskSlice";

const store = configureStore({
    reducer:TaskSliceReducer
})

export default store