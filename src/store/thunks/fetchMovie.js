import { createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from '../../common/apis/MovieApi'
import MovieApiKey from '../../common/apis/MoviesApiKey'
const movieName = 'Harry'

export const fetchMovie = createAsyncThunk('movie/fetch',async ()=>{
    const res = await MovieApi.get(`?apikey=${MovieApiKey}&s=${movieName}&t=movie`)
    return res.data
})