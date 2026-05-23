import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../redux/products/productsSlice";
import { selectBasketProducts } from "../../redux/products/productsSelectors";
import { Card, Name, Text, Btn } from "./ProductItem";

export const ProductItem = ({ id, name, price, description, image }) => {
  const dispatch = useDispatch();
  const basket = useSelector(selectBasketProducts);

  const isInBasket = basket.includes(id);

  const addBasket = () => {
    if (!isInBasket) {
      dispatch(addToBasket(id));
    }
  };

  return (
    <Card>
      <Name>{name}</Name>
      <Text>{price}</Text>
      <Text>{description}</Text>

      <Btn onClick={addBasket}>Add to basket</Btn>
    </Card>
  );
};
