import { Route, Routes } from "react-router-dom";

import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Navigation from "./components/Navigation/Navigation";
import MainPage from "./pages/MainPage/MainPage";

import styles from "./App.module.css";
import Cart from "./components/Cart/Cart";
import { useShoppingCart } from "./context/ShoppingCartContext";
import ProductsCategory from "./pages/ProductsPage/ProductsCategory";

function App() {
  const { isCartOpen } = useShoppingCart();

  return (
    <div className={styles.appStyles}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products/sort/:category" element={<ProductsCategory />} />
      </Routes>
      {isCartOpen ? <Cart /> : null}
    </div>
  );
}

export default App;
