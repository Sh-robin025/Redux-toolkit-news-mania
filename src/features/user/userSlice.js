import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        isSignedIn: false,
        userData: null,
        newsData: null,
    },
    reducers: {
        userSignedIn: (state, action) => {
            state.isSignedIn = action.payload
        },
        userData: (state, action) => {
            state.userData = action.payload
        },
        newsData: (state, action) => {
            state.newsData = action.payload
        }
    }
})

export const { userSignedIn, userData, newsData } = userSlice.actions;
export default userSlice.reducer;