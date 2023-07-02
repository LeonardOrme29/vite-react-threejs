import { createSlice } from "@reduxjs/toolkit";

export const colorFrameSlice=createSlice({
    name:'colorFrame',
    initialState:{
        colors: null,
        materials: null,
    },
    reducers:{
        color:(state,action)=>{
            state.colors=action.payload; //payload === la data
        },
        material:(state,action)=>{
            state.materials=action.payload; //payload === la data
        },
        clear:(state)=>{
            state.colors=[];
            state.materials=[];
        }
    }
})
export const {color,material,clear}=colorFrameSlice.actions;
export default colorFrameSlice.reducer;