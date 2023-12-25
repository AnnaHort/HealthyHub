import { createSlice } from "@reduxjs/toolkit"
import { fetchUserStatictic } from "./dashboardOperation"

const initionState = {
    food: {},
    water: {},
    weight: {},
    loading: false,
};

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
              state.food = action.payload.food;
              state.water = action.payload.water;
              state.weight = action.payload.weight;
            })
            .addCase(fetchUserStatictic.rejected, (state) => {
                state.loading = false;
        })
    )
})

export const userMonthsReducer =  monthsInfoSlice.reducer;