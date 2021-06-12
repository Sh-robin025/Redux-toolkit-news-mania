import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import newsReducer from "../features/newsSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        news: newsReducer,
    },
})