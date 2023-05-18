import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const url = 'https://randomuser.me/api/?results=5'

export const getData = createAsyncThunk('fetch/data', async () => {
    try {
      const response = await axios.get(url);
      const results = response.data.results;
      const names = results.map((user) => ({
        id: user.id.value,
        firstName: user.name.first,
        lastName: user.name.last,
      }));
      return names;
    } catch (error) {
    console.log(error);
    }
  });
  
const initialState = {
    users: [],
    isLoading: false,
    error: undefined
}


const userSlice = createSlice({
    name: 'fetchUser',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(getData.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
          })
          .addCase(getData.rejected, (state) => {
            state.isLoading = false;
            state.error = 'There was an error.';
          });
      }
      
})

export const { actions } = userSlice;
export default userSlice.reducer;