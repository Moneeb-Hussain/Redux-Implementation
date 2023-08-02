import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../counterSlice";
import todoSlice from "../todoSlice";

export default configureStore({
    reducer:{
        counter:counterSlice,
        todo:todoSlice,
    },
})
