import { createSlice } from "@reduxjs/toolkit"
import { cake_ordered } from "../cake/cakeSlice"

const initialState = {
    numberOfIcecream: 30
}
const icecreamSlice = createSlice({
    name: "icecream",
    initialState,
    reducers: {
        ordered_icecream: (state, action) => {
            state.numberOfIcecream = state.numberOfIcecream > 0 && state.numberOfIcecream - 1
        },
        restocked_icecream: (state, action) => {
            state.numberOfIcecream = state.numberOfIcecream + action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(cake_ordered, (state, action) => {
            state.numberOfIcecream = state.numberOfIcecream > 0 && state.numberOfIcecream - 3
        })
    }
})
export default icecreamSlice.reducer
export const { ordered_icecream, restocked_icecream } = icecreamSlice.actions