import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    isLoading: false,
    users: [],
    isError: ""
}
export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    return response.data
})
const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state, action) => {
            state.isLoading = true
            state.users = []
            state.isError = ""
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.users = action.payload
            state.isError = ""
        })
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.isLoading = false
            state.users = []
            state.isError = action.error.message
        })
    }
})
export default userSlice.reducer