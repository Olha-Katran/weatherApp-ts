/* eslint-disable import/no-cycle */
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Coord} from "../../types/CityData";

type CityMapData = {
    coord: Coord;
    city: string;
}

const initialState:CityMapData = {
    coord: {
        lat: 49.842957,
        lon: 24.031111,
    },
    city: "Lviv",
};

export type CityPayloadAction = CityMapData;

const cityInputSlice = createSlice({
    name: 'cityData',
    initialState,
    reducers: {
        setSelectedCity(state, action: PayloadAction<CityPayloadAction>) {
            state.coord = action.payload.coord;
            state.city = action.payload.city;
        },
        resetCityData() {
            return initialState;
        }
    },
});

export const { setSelectedCity, resetCityData } = cityInputSlice.actions;

export default cityInputSlice;