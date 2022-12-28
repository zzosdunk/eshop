import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Rating from "@mui/material/Rating";
import "./MainPage.css";

import image1 from "../../assets/img/image1.png";
import Cat1 from "../../assets/img/category-1.jpg";
import Cat2 from "../../assets/img/category-2.jpg";
import Cat3 from "../../assets/img/category-3.jpg";
import Pro1 from "../../assets/img/product-1.jpg";
import Pro2 from "../../assets/img/product-2.jpg";
import Pro3 from "../../assets/img/product-3.jpg";
import Pro4 from "../../assets/img/product-4.jpg";
import User1 from "../../assets/img/user-1.png";
import User2 from "../../assets/img/user-2.png";
import User3 from "../../assets/img/user-3.png";
import Brand1 from "../../assets/img/logo-godrej.png";
import Brand2 from "../../assets/img/logo-oppo.png";
import Brand3 from "../../assets/img/logo-coca-cola.png";
import Brand4 from "../../assets/img/logo-paypal.png";
import Brand5 from "../../assets/img/logo-philips.png";
import Logo from "../../assets/img/logo-white.png";
import PlayStore from "../../assets/img/play-store.png";
import AppStore from "../../assets/img/app-store.png";
import LeftQuote from "../../assets/icons/left-quote.png";
import RightQuote from "../../assets/icons/right-quote.png";
import Exclusive from "../../assets/img/exclusive.png";
import Navigation from "../../components/Navigation/Navigation";

const MainPage = () => {
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
                Give Your Workout
                <br /> A New Style!
              </h1>
              <p>
                Success isn't always about greatness. It's about consistency.
                Cosistent hard work gains success. Greatness will come.
              </p>
              <a href="" className="btn">
                Explore Now &#8594;
              </a>
            </div>
            <div className="col-2">
              <img src={image1} />
            </div>
          </div>
        </div>
      </div>

      <div className="categories">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <img src={Cat1} />
            </div>
            <div className="col-3">
              <img src={Cat2} />
            </div>
            <div className="col-3">
              <img src={Cat3} />
            </div>
          </div>
        </div>
      </div>

      <div className="small-container">
        <h2 className="title">Featured Products</h2>
        <div className="row">
          <div className="col-4">
            <img src={Pro1} />
            <h4>Red Printed T-Shirt</h4>
            <Rating
              name="half-rating-read"
              value={4.5}
              precision={0.5}
              readOnly
            />
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src={Pro2} />
            <h4>Red Printed T-Shirt</h4>
            <Rating
              name="half-rating-read"
              value={3.5}
              precision={0.5}
              readOnly
            />
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src={Pro3} />
            <h4>Red Printed T-Shirt</h4>
            <Rating
              name="half-rating-read"
              value={4}
              precision={0.5}
              readOnly
            />
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src={Pro4} />
            <h4>Red Printed T-Shirt</h4>
            <Rating
              name="half-rating-read"
              value={4.5}
              precision={0.5}
              readOnly
            />
            <p>$50.00</p>
          </div>
        </div>
      </div>

      <div className="offer">
        <div className="small-container">
          <div className="row">
            <div className="col-2">
              <img src={Exclusive} className="offer-img" />
            </div>
            <div className="col-2">
              <p>Exclusively Available on RedStore</p>
              <h1>Smart Band 4</h1>
              <small>
                The Mi Smart Band 4 features a 39.9% larger than mi Band 3
                AMOLED color full-touch display with adjustable brightness, so
                everything is cleas as can be.
              </small>
              <br />
              <a href="" className="btn">
                Buy Now &#8594;
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <img src={LeftQuote} className="leftQuote" />
              <p>lorem ipsum</p>
              <Rating
                name="half-rating-read"
                value={4.5}
                precision={0.5}
                readOnly
              />
              <img src={User1} className="commentAvatar" />
              <h3>Sean Parker</h3>
            </div>
            <div className="col-3">
              <img src={LeftQuote} className="leftQuote" />
              <p>lorem ipsum</p>
              <Rating
                name="half-rating-read"
                value={4.5}
                precision={0.5}
                readOnly
              />
              <img src={User2} className="commentAvatar" />
              <h3>Sean Parker</h3>
            </div>
            <div className="col-3">
              <img src={LeftQuote} className="leftQuote" />
              <p>lorem ipsum</p>
              <Rating
                name="half-rating-read"
                value={4.5}
                precision={0.5}
                readOnly
              />
              <img src={User3} className="commentAvatar" />
              <h3>Sean Parker</h3>
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
              <img src={Logo} />
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
