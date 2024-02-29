/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit';
import api from "./api/main-api";

export const store = configureStore({
    reducer: {
    },
    middleware: mw => mw().concat(api.middleware),
});
