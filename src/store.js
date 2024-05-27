import { configureStore } from "@reduxjs/toolkit";
import goalsReducer from "./reducers/goalsSlice";
import optionReducer from "./reducers/optionSlice"
import tasksReducer from './reducers/tasksSlice';


export default configureStore({
    reducer:{
        goals: goalsReducer,
        option: optionReducer,
        tasks: tasksReducer
    }
})