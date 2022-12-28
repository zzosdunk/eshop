import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { IProduct } from "../../models";
import { formatCurrency } from "../../utilities/formatCurrency";

import styles from "./Product.module.css";

interface ProductProps {
  product: IProduct;
}

export const Product = ({ product }: ProductProps) => {
  const [showDescription, setShowDescription] = useState(false);

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(product);

  const btnBgClassName = showDescription
    ? styles.product_activeButton
    : styles.product_disabledButton;

  return (
    <div className={styles.product}>
      <div className={styles.productImage}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.productDescription}>
        <div>
          <h1>{product.title}</h1>
          <p className={styles.category}>{product.category}</p>
          <p>{product.description}</p>
        </div>
        <div>
          <div className={styles.rating}>
            <Typography component="legend">Users rate: </Typography>
            <Rating
              name="half-rating-read"
              value={product?.rating}
              precision={0.5}
              readOnly
            />
          </div>
        </div>
      </div>
      <div className="productLogic">
        <div className={styles.quantityBlock}>
          <p className={styles.price}>{formatCurrency(product.price)}</p>
          {quantity === 0 ? (
            <Button
              variant="contained"
              disableElevation
              onClick={() => increaseCartQuantity(product)}
            >
              Add product
            </Button>
          ) : (
            <div className={styles.quantityLogic}>
              <Button
                variant="contained"
                disableElevation
                onClick={() => decreaseCartQuantity(product)}
              >
                -
              </Button>
              <p>{quantity}</p>
              <Button
                variant="contained"
                disableElevation
                onClick={() => increaseCartQuantity(product)}
              >
                +
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
