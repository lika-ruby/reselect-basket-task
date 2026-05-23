import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://69da292226585bd92dd3a402.mockapi.io/api/";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/products");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
