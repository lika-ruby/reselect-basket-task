export const selectProducts = (state) => state.products.products;

export const selectBasketProducts = (state) => {
    const basket = state.products.basketProducts;
    const products = state.products.products;

    return products
        .map((prod) => {
            const basketItem = basket.find((b) => b.id === prod.id);

            if (!basketItem) return null;

            return {
                ...prod,
                count: basketItem.count,
            };
        })
        .filter(Boolean);
};