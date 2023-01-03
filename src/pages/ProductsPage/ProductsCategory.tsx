import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  onSnapshot,
  QuerySnapshot,
  DocumentData,
  query,
  limit,
  getDocs,
  startAt,
  endAt,
  orderBy,
  where,
} from "firebase/firestore";
import { productsCollection } from "../../lib/controller";

import styles from "./ProductsPage.module.css";
import Navigation from "../../components/Navigation/Navigation";
import { IProduct } from "../../models";
import Loader from "../../components/Loader/Loader";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import { Product } from "../../components/Product/Product";

const ProductsCategory = () => {
  const { category } = useParams();

  const [productsCategory, setProductsCategory] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      const q = query(productsCollection, where("category", "==", category));

      const documentSnapshots = await getDocs(q);
      setProductsCategory(() =>
        documentSnapshots.docs.map((doc) => {
          return {
            ...doc.data(),
          };
        })
      );

      setError("");
      setIsLoading(true);
    } catch (e: unknown) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Navigation />
      <div className={styles.dz_productsPage}>
        <div className={styles.title}>
          <h1>SORTED PRODUCTS BY {category}</h1>
        </div>
        <div className={styles.products}>
          {isLoading && <Loader />}
          {error && <ErrorMessage error={error} />}
          {productsCategory.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsCategory;
