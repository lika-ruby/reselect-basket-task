import { selectProducts } from "../../redux/products/productsSelectors";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/products/productsOperations";
import { ProductItem } from "../ProductItem/ProductItem.jsx";
import { List } from "./Products.js";

export const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <List>
      {products.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </List>
  );
};
