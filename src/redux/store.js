import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './products/productsSlice.js';

export const store = configureStore({
    reducer: {
        products: productsReducer,
    },
});