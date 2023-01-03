import { useState, useEffect } from "react";
import { IProduct } from "../models";
import axios, { AxiosError } from "axios";

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
import { productsCollection } from "../lib/controller";

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [paginatedProducts, setPaginatedProducts] = useState<IProduct[]>([]);
  const [mostRatedProducts, setMostRatedProducts] = useState<IProduct[]>([]);
  const [limitedProducts, setLimitedProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [firstPaginationProduct, setFirstPaginationProduct] =
    useState<number>(1);

  const fetchProducts = async () => {
    try {
      // const q = query(
      //   productsCollection,
      //   where("category", "==", "Electronics")
      // );
      // const querySnapshot = await getDocs(q);
      // console.log(querySnapshot.docs.length);
      // querySnapshot.forEach((doc) => {
      //   // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      // });

      // const q = query(productsCollection, where("title", "==", `fold${"%"}`));
      // const querySnapshot = await getDocs(q);
      // console.log(querySnapshot.docs.length);
      // querySnapshot.forEach((doc) => {
      //   // doc.data() is never undefined for query doc snapshots
      //   console.log(doc.id, " => ", doc.data());
      // });

      // console.log("first product", firstPaginationProduct);
      // const first = query(
      //   productsCollection,
      //   orderBy("id"),
      //   startAt(firstPaginationProduct),
      //   limit(5)
      // );
      // const documentSnapshots = await getDocs(first);
      // setPaginatedProducts(() =>
      //   documentSnapshots.docs.map((doc) => {
      //     return {
      //       ...doc.data(),
      //     };
      //   })
      // );
      // console.log("paginated", documentSnapshots);
      // console.log("show products", paginatedProducts);

      onSnapshot(
        productsCollection,
        (snapshot: QuerySnapshot<DocumentData>) => {
          setProducts(
            snapshot.docs.map((doc) => {
              return {
                ...doc.data(),
              };
            })
          );
        }
      );

      getMostRatedProducts();
      getLimitedProducts();
      setError("");
      setIsLoading(true);
      // const response = await axios.get<IProduct[]>(
      //   `${process.env.REACT_APP_DB_LINK}/products.json`
      // );
      // setProducts(response.data);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
    // firebaseRef.onSnapshot((querySnapshot) => {
    //   const items: IProduct[] = [];
    //   querySnapshot.forEach((item) => {
    //     const data = item.data();

    //     if (data) {
    //       const foo = data.foo;
    //       items.push(foo);
    //     }
    //   });

    //   setProducts(items);
    // });
  };

  const getMostRatedProducts = async () => {
    const q = query(productsCollection, orderBy("rating", "desc"), limit(4));

    const documentSnapshots = await getDocs(q);
    setMostRatedProducts(() =>
      documentSnapshots.docs.map((doc) => {
        return {
          ...doc.data(),
        };
      })
    );
  };

  const getLimitedProducts = async () => {
    const q = query(productsCollection, where("limited", "==", true));

    const documentSnapshots = await getDocs(q);
    console.log(documentSnapshots);
    setLimitedProducts(() =>
      documentSnapshots.docs.map((doc) => {
        return {
          ...doc.data(),
        };
      })
    );
  };

  const getPaginate = async (currentPage: number) => {
    setFirstPaginationProduct((prev) => {
      const indexOfLastProduct = currentPage * 5;
      const indexOfFirstProduct = indexOfLastProduct - 5;
      return indexOfFirstProduct;
    });
  };

  useEffect(() => {
    fetchProducts();
  }, [firstPaginationProduct]);

  return {
    isLoading,
    error,
    getPaginate,
    products,
    mostRatedProducts,
    limitedProducts,
  };
};
