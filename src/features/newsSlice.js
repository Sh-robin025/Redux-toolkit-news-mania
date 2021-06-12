import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
    name: "news",
    initialState: { newsData: null },
    reducers: {
        newsData: (state, action) => {
            state.newsData = action.payload
        }
    }
})

export const { newsData } = newsSlice.actions;
export default newsSlice.reducer