import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import CartIcon from "../../assets/img/cart.png";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";

import Hamburger from "../../assets/img/menu.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const { openCart, cartQuantity } = useShoppingCart();

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

  const LINKS = [
    { title: "Main Page", link: "/" },
    { title: "Products", link: "/products" },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <>
      <div className="dz__navbar">
        <div className="dz__navbar-menu">
          <img
            src={Hamburger}
            className="menu-icon"
            alt="mobileNavbar"
            onClick={() => setToggleMenu((prev) => !prev)}
          />
          {toggleMenu && (
            <div
              className="dz__navbar-mobile_menu_container"
              style={{
                maxHeight: toggleMenu ? 300 : 0,
              }}
            >
              <div className="dz__navbar-mobile_menu_container-links">
                {LINKS.map((link) => (
                  <NavLink key={link.title} to={link.link}>
                    {link.title}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="dz__navbar-links">
          <div className="dz__navbar-links_container">
            {LINKS.map((link) => (
              <NavLink key={link.title} to={link.link}>
                {link.title}
              </NavLink>
            ))}
          </div>
        </div>

        <button onClick={() => setIsOpen((prev) => !prev)}>
          {cartQuantity > 0 ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <img
                src={CartIcon}
                style={{ width: 30, height: 30 }}
                alt="cart-icon"
              />
            </StyledBadge>
          ) : (
            <img
              src={CartIcon}
              style={{ width: 30, height: 30 }}
              alt="cart-icon"
            />
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
            <h1>Cart</h1>
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
        </div>
      </div>
    </>
  );
};

export default Navigation;
