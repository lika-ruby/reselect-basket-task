import { selectBasketProducts } from "../../redux/products/productsSelectors";
import { useSelector } from "react-redux";
import {
  addToBasket,
  removeOneFromBasket,
  removeFromBasket,
} from "../../redux/products/productsSlice.js";
import { useDispatch } from "react-redux";
import {
  Wrapper,
  Title,
  List,
  Item,
  Name,
  Price,
  Box,
  Text,
  Count,
  Btn,
} from "./Basket.js";

export const Basket = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectBasketProducts);

  return (
    <Wrapper>
      <Title>Basket</Title>
      <List>
        {products.map((product) => (
          <Item key={product.id}>
            <Name>{product.name}</Name>
            <Price>{product.price}</Price>
            <Text>{product.description}</Text>
            <Box>
              <Btn onClick={() => dispatch(removeOneFromBasket(product.id))}>
                -
              </Btn>
              <Count>{product.count}</Count>
              <Btn onClick={() => dispatch(addToBasket(product.id))}>+</Btn>
              <Btn onClick={() => dispatch(removeFromBasket(product.id))}>
                x
              </Btn>
            </Box>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};
