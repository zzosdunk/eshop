import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import userLogo from "../../assets/images/user.png";
import profile from "../../assets/images/profile.png";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { Button, IconButton } from "@mui/material";
import CartIcon from "../../assets/img/cart.png";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import DeleteIcon from "@mui/icons-material/Delete";

import Hamburger from "../../assets/img/menu.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { openCart, cartQuantity, cleanCart } = useShoppingCart();

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  return (
    <>
      <div className="navbar">
        <div className="links">
          <NavLink to="/">Main Page</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        {/* <div className="logo">
        <a href="#">DZShop</a>
      </div> */}
        {/* <div className="userProfile">
        <button>Profile</button>
      </div> */}
        <div className="hamburger-btn">
          <img src={Hamburger} className="menu-icon" />
        </div>
        <button onClick={() => setIsOpen((prev) => !prev)}>
          {cartQuantity > 0 ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <img src={CartIcon} style={{ width: 30, height: 30 }} />
            </StyledBadge>
          ) : (
            <img src={CartIcon} style={{ width: 30, height: 30 }} />
          )}
        </button>
      </div>
      <div
        className="sub-menu-wrap"
        style={{
          maxHeight: isOpen ? 400 : 0,
        }}
      >
        <div className="sub-menu">
          <div className="user-info">
            <h1>Your items</h1>
          </div>
          <hr />
          <button
            className="sub-menu-link"
            onClick={() => {
              setIsOpen(false);
              openCart();
            }}
          >
            <div className="icon">
              <AddShoppingCartIcon />
            </div>
            <p>View Cart</p>
            <span className="cartQuantity">{cartQuantity}</span>
          </button>
          <button
            className="sub-menu-link"
            aria-label="delete"
            onClick={() => {
              cleanCart();
              setIsOpen(false);
            }}
          >
            <div className="icon">
              <DeleteIcon />
            </div>
            <p>Clean up cart</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
