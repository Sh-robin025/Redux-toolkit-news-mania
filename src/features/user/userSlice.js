import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        isSignedIn: false,
        userData: null,
    },
    reducers: {
        userSignedIn: (state, action) => {
            state.isSignedIn = action.payload
        },
        userData: (state, action) => {
            state.userData = action.payload
        }
    }
})

export const { userSignedIn, userData } = userSlice.actions;
export default userSlice.reducer;