import Rating from "@mui/material/Rating";
import styles from "./HighestRatedProduct.module.css";
import { formatCurrency } from "../../utilities/formatCurrency";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { IProduct } from "../../models";
import Button from "@mui/material/Button";

interface ProductProps {
  product: IProduct;
}

const HighestRatedProduct = ({ product }: ProductProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(product);
  return (
    <div className={styles["col-4"]}>
      <img src={product.image} />
      <h4>{product.title}</h4>
      <Rating
        name="half-rating-read"
        value={product.rating}
        precision={0.5}
        readOnly
      />
      <p>{formatCurrency(product.price)}</p>
      <div className={styles.quantityBlock}>
        {quantity === 0 ? (
          <Button
            variant="contained"
            disableElevation
            onClick={() => increaseCartQuantity(product)}
          >
            Add to cart
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
  );
};

export default HighestRatedProduct;
