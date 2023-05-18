import { configureStore } from "@reduxjs/toolkit";
import userReducer from './users/userSlice'


const store = configureStore({
    reducer: {
        fetchUser: userReducer,
    }
})

export default store;