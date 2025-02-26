import { configureStore } from "@reduxjs/toolkit";
import tasksSilce from "./taskSlice";

export const store = configureStore({
    reducer:{
        tasks:tasksSilce
    }
})