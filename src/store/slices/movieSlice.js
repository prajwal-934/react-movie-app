import { createSlice } from "@reduxjs/toolkit";
import { fetchMovie } from "../thunks/fetchMovie";


const movieSlice = createSlice({
    name:'movie',
    initialState:{
        isLoading : true,
        data:[],
        error : null
    },

    extraReducers(builder){
        builder.addCase(fetchMovie.pending,(state,action)=>{
            state.isLoading = true
        })
        builder.addCase(fetchMovie.fulfilled,(state,action)=>{
            state.isLoading = false
            state.data = action.payload.Search
        })
        builder.addCase(fetchMovie.rejected,(state,action)=>{
            state.isLoading=false
            state.error = action.error
        })
    }
})

export const {addMovie} = movieSlice.actions 
export const movieReducer = movieSlice.reducer