/* eslint-disable import/no-cycle */
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CityInputState {
    userInputCity: string;
}

const initialState:CityInputState = {
    userInputCity: "Lviv",
}

const cityInputSlice = createSlice({
    name: 'cityInput',
    initialState,
    reducers: {
        setUserInputCity(state, action: PayloadAction<string>) {
            state.userInputCity = action.payload;
        },
    },
});

export const { setUserInputCity } = cityInputSlice.actions;

export default cityInputSlice.reducer;