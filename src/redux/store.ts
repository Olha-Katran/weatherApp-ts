/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit';
import { mainApi } from "./api/main-api";
import bannerSlice from "./api/banner";


export const store = configureStore({
    reducer: {
        [mainApi.reducerPath]: mainApi.reducer,
        [bannerSlice.name]: bannerSlice.reducer,
    },
    middleware: mw => mw().concat(mainApi.middleware),
});

