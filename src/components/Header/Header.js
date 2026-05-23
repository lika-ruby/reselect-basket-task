import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderBox = styled.header`
  background-color: #1976d2;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const Nav = styled.ul`
  display: flex;
  gap: 25px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Link = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    color: #dbeafe;
  }

  &.active {
    border-bottom: 2px solid white;
  }
`;