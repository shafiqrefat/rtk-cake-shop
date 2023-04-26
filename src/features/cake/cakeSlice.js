import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    numberOfCake: 10
}

const cakeSlice = createSlice({
    name: "cake",
    initialState,
    reducers: {
        cake_ordered: (state, action) => {
            state.numberOfCake = state.numberOfCake > 0 && state.numberOfCake - 1
        },
        cake_restocked: (state, action) => {
            state.numberOfCake = state.numberOfCake + action.payload
        }
    }
})
export default cakeSlice.reducer
export const { cake_ordered, cake_restocked } = cakeSlice.actions