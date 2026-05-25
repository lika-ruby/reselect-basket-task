import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout.jsx";
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const BasketPage = lazy(() => import("./pages/BasketPage.jsx"));
const HomePage = lazy(() => import("./pages/HomePage.jsx"));

function App() {
  return (
    <BrowserRouter basename="/reselect-basket-task">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/basket" element={<BasketPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
