import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header.jsx";
import { Main } from "./Layout.js";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
};
