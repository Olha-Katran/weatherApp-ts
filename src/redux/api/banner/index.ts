/* eslint-disable import/no-cycle */
import {createDraftSafeSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../hooks";

export enum MessageType {
    success = 'success',
    error = 'error',
}

export type BannerState = {
    type: MessageType | null;
    message: string | null
};

const initialState: BannerState = {
    type: null,
    message:  null,
};

export type BannerPayloadAction = BannerState;

const bannerSlice = createSlice({
    name: 'bannerData',
    initialState,
    reducers: {
        setBannerData(state, action: PayloadAction<BannerPayloadAction>) {
            state.type =  action.payload.type;
            state.message = action.payload.message;
        },
        resetBannerData() {
            return initialState;
        },
    },
});

const selectSelf = (state: RootState) => state;
const selectBannerData = createDraftSafeSelector(
    selectSelf,
    state => state.bannerData,
);

export const { setBannerData, resetBannerData } = bannerSlice.actions;

export { selectBannerData };

export default bannerSlice;