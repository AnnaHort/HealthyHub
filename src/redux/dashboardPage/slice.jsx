import { createSlice } from "@reduxjs/toolkit"
import { fetchUserStatictic } from "./operation"

const initionState = {
    calories: null,
    water: null,
    weight: null,
    loading: false,
}

const monthsInfoSlice = createSlice({
    name: 'info',
    initialState: initionState,
    reducers: {},
    extraReducers: builder => (
        builder.addCase(fetchUserStatictic.pending, (state) => {
            state.loading = true
        })
            .addCase(fetchUserStatictic.fulfilled, (state, action) => {
              state.loading = false;
              state.calories = action.payload.calories;
              state.water = action.payload.water;
              state.weight = action.payload.weight;
        })
    )
})

export default monthsInfoSlice.reducer;