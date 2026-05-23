import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productsOperations.js";

const loadBasket = () => {
    try {
        const data = localStorage.getItem("basket");
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
};

const saveBasket = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket));
};

const initialState = {
    products: [],
    basketProducts: loadBasket(),
    isLoading: false,
    error: null,
};

const productsSlice = createSlice({
    name: "products",
    initialState,

    reducers: {
        addToBasket: (state, action) => {
            const id = action.payload;

            const item = state.basketProducts.find((prod) => prod.id === id);

            if (item) {
                item.count += 1;
            } else {
                state.basketProducts.push({ id, count: 1 });
            }

            saveBasket(state.basketProducts);
        },
        removeOneFromBasket: (state, action) => {
            const id = action.payload;
            const item = state.basketProducts.find((prod) => prod.id === id);
            if (!item) return
            if (item.count > 1) {
                item.count -= 1
            } else {
                state.basketProducts = state.basketProducts.filter((prod) => prod.id !== id)
            }
            saveBasket(state.basketProducts);
        },
        removeFromBasket: (state, action) => {
            const id = action.payload;
            const item = state.basketProducts.find((prod) => prod.id === id);
            if (!item) return
            state.basketProducts = state.basketProducts.filter((prod) => prod.id !== id)
            saveBasket(state.basketProducts);
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { addToBasket, removeOneFromBasket, removeFromBasket } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;