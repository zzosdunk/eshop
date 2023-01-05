import { Route, Routes } from "react-router-dom";

import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import MainPage from "./pages/MainPage/MainPage";

import "./App.css";
import Cart from "./components/Cart/Cart";
import { useShoppingCart } from "./context/ShoppingCartContext";
import ProductsCategory from "./pages/ProductsPage/ProductsCategory";

enum Path {
  Main = "/",
  Products = "/products",
  Contact = "/contact",
  ProductsCategory = "/products/sort/:category",
}

function App() {
  const { isCartOpen } = useShoppingCart();

  return (
    <>
      <Routes>
        <Route path={Path.Main} element={<MainPage />} />
        <Route path={Path.Products} element={<ProductsPage />} />
        <Route path={Path.Contact} element={<ContactPage />} />
        <Route path={Path.ProductsCategory} element={<ProductsCategory />} />
      </Routes>
      {isCartOpen ? <Cart /> : null}
    </>
  );
}

export default App;
