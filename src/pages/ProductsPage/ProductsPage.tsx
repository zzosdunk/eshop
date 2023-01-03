import { useState, useEffect } from "react";

import { Product } from "../../components/Product/Product";
import { useProducts } from "../../hooks/useProducts";
import Loader from "../../components/Loader/Loader";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";
import Pagination from "../../components/Pagination/Pagination";
import Filters from "../../components/Filters/Filters";
import { IProduct } from "../../models";

import styles from "./ProductsPage.module.css";
import Navigation from "../../components/Navigation/Navigation";

const ProductsPage = () => {
  const { isLoading, error, getPaginate, products } = useProducts();

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(5);

  interface FilteredProducts {
    query: string;
    filteredList: IProduct[];
  }

  const [filteredProducts, setFilteredProducts] = useState<FilteredProducts>({
    query: "",
    filteredList: [],
  });

  const filterDataByUserInput = (searchQuery: string) => {
    const filteredData = products.filter((product) => {
      if (searchQuery.trim() === "") {
        filteredProducts.filteredList.splice(
          0,
          filteredProducts.filteredList.length
        );
        console.log(filteredProducts.filteredList.length);
        return products;
      }

      if (product.title)
        return product.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    setFilteredProducts({ query: searchQuery, filteredList: filteredData });
  };

  const filterDataByType = (typeQuery: string) => {
    const filteredData = products.filter((product) => {
      if (typeQuery.trim() === "") {
        filteredProducts.filteredList.splice(
          0,
          filteredProducts.filteredList.length
        );
        console.log(filteredProducts.filteredList.length);
        return products;
      }

      if (product.category)
        return product.category.toLowerCase().includes(typeQuery.toLowerCase());
    });

    setFilteredProducts({ query: typeQuery, filteredList: filteredData });
    console.log(filteredProducts.filteredList.length);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProductsShown = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    getPaginate(currentPage);
  }, [currentPage]);

  return (
    <>
      <Navigation />
      <div className={styles.dz_productsPage}>
        <div className={styles.title}>
          <h1>AVAILABLE PRODUCTS</h1>
        </div>
        {/* <div className={styles.filterBar}>
          <Filters
            bySearchFilter={filterDataByUserInput}
            byTypeFilter={filterDataByType}
          />
        </div> */}
        <div className={styles.products}>
          {isLoading && <Loader />}
          {error && <ErrorMessage error={error} />}
          {filteredProducts.filteredList.length === 0
            ? currentProductsShown.map((product) => (
                <Product key={product.id} product={product} />
              ))
            : filteredProducts.filteredList.map((product) => (
                <Product key={product.id} product={product} />
              ))}
          {filteredProducts.filteredList.length === 0 && (
            <Pagination
              itemsPerPage={productsPerPage}
              totalItems={products.length}
              paginate={paginate}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
