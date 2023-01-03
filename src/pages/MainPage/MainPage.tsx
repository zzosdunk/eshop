import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { NavLink } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import "./MainPage.css";

import User1 from "../../assets/img/user-1.png";
import User2 from "../../assets/img/user-2.png";
import User3 from "../../assets/img/user-3.png";
import Brand1 from "../../assets/img/logo-godrej.png";
import Brand2 from "../../assets/img/logo-oppo.png";
import Brand3 from "../../assets/img/logo-coca-cola.png";
import Brand4 from "../../assets/img/logo-paypal.png";
import Brand5 from "../../assets/img/logo-philips.png";
import PlayStore from "../../assets/img/play-store.png";
import AppStore from "../../assets/img/app-store.png";
import LeftQuote from "../../assets/icons/left-quote.png";
import Navigation from "../../components/Navigation/Navigation";
import HighestRatedProduct from "../../components/Product/HighestRatedProduct";

const MainPage = () => {
  const { mostRatedProducts, limitedProducts } = useProducts();

  const randomLimitedProduct =
    limitedProducts[Math.floor(Math.random() * limitedProducts.length)];

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <div className="header">
        <Navigation />
        <div className="container">
          <div className="row">
            <div className="col-2">
              <h1>
                Find The Best
                <br /> What You Need!
              </h1>
              <p>
                Success isn't always about greatness. It's about consistency.
                Cosistent hard work gains success. Greatness will come.
              </p>
              <NavLink to="/products" className="btn">
                Explore Now &#8594;
              </NavLink>
            </div>
            <div className="col-2">
              <img src="https://i.postimg.cc/50cHmR4W/mainpage.png" />
            </div>
          </div>
        </div>
      </div>

      <div className="categories">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <NavLink to={`/products/sort/Clothes`}>
                <img src="https://i.postimg.cc/dVFPYR5m/clothescategory.jpg" />
              </NavLink>
            </div>
            <div className="col-3">
              <NavLink to={`/products/sort/Jewelery`}>
                <img src="https://i.postimg.cc/zfDsLzZy/jewelerycategory.jpg" />
              </NavLink>
            </div>
            <div className="col-3">
              <NavLink to={`/products/sort/Electronics`}>
                <img src="https://i.postimg.cc/MpYkKc4k/electronicscategory.jpg" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="small-container">
        <h2 className="title">Featured Products</h2>
        <div className="row">
          {mostRatedProducts.map((product) => (
            <HighestRatedProduct key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="offer">
        <div className="small-container">
          <div className="row">
            <div className="col-2">
              <img src={randomLimitedProduct?.imgTrans} className="offer-img" />
            </div>
            <div className="col-2">
              <p>Limited Edition</p>
              <h1>{randomLimitedProduct?.title}</h1>
              <small>{randomLimitedProduct?.description}</small>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <img src={LeftQuote} className="leftQuote" />
              <p>
                Very cool store! Super support, lightning fast, thanks a lot to
                the guys for such service and the highest culture of customer
                service!
              </p>
              <img src={User1} className="commentAvatar" />
              <h3>Elvira Trivett</h3>
            </div>
            <div className="col-3">
              <img src={LeftQuote} className="leftQuote" />
              <p>
                As a customer of this store, I can say that I am completely
                satisfied with the level of service and the quality of the goods
                provided.
              </p>
              <img src={User2} className="commentAvatar" />
              <h3>Sean Parker</h3>
            </div>
            <div className="col-3">
              <img src={LeftQuote} className="leftQuote" />
              <p>
                The range and quality of goods is impressive, the site design
                itself brings a separate pleasure. Very convenient and fast
                delivery.
              </p>
              <img src={User3} className="commentAvatar" />
              <h3>Elizabeth Gill</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="brands">
        <div className="small-container">
          <div className="row">
            <div className="col-5">
              <img src={Brand1} />
            </div>
            <div className="col-5">
              <img src={Brand2} />
            </div>
            <div className="col-5">
              <img src={Brand3} />
            </div>
            <div className="col-5">
              <img src={Brand4} />
            </div>
            <div className="col-5">
              <img src={Brand5} />
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col-1">
              <h3>Download Our App</h3>
              <p>Download App for iOS and Android mobile phone.</p>
              <div className="app-logo">
                <img src={AppStore} />
                <img src={PlayStore} />
              </div>
            </div>
            <div className="footer-col-2">
              <img src="https://i.postimg.cc/y6mgxMg9/transparent-Logo-white.png" />
              <p>
                Our purpose is to sustainably make the pleasure and benefits of
                sports accessible to the many.
              </p>
            </div>
            <div className="footer-col-3">
              <h3>Useful Links</h3>
              <ul>
                <li>Coupons</li>
                <li>Blog Post</li>
                <li>Return policy</li>
                <li>Join Affiliate</li>
              </ul>
            </div>
            <div className="footer-col-4">
              <h3>Follow Us</h3>
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>YouTube</li>
              </ul>
            </div>
          </div>
          <hr />
          <p className="copyright">Copyright 2022 - Denys Zosym</p>
        </div>
      </div>
    </>
  );
};

export default MainPage;
