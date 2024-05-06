/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit';
import { mainApi } from "./api/main-api";
import bannerSlice from "./api/banner";
import cityInputSlice from "./search/search";


export const store = configureStore({
    reducer: {
        [mainApi.reducerPath]: mainApi.reducer,
        [bannerSlice.name]: bannerSlice.reducer,
        [cityInputSlice.name]: cityInputSlice.reducer,
    },
    middleware: mw => mw().concat(mainApi.middleware),
});

