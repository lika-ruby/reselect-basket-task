import { HeaderBox, Nav, Link } from "./Header";

export const Header = () => {
  return (
    <HeaderBox>
      <Nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/basket">Basket</Link>
        </li>
      </Nav>
    </HeaderBox>
  );
};
