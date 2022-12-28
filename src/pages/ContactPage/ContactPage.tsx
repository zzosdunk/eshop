import Navigation from "../../components/Navigation/Navigation";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <>
      <Navigation />
      <div className="contactUs">
        <div className="title">
          <h1>Get in Touch</h1>
        </div>
        <div className="box">
          <div className="contact form">
            <h2>Send a Message</h2>
            <form>
              <div className="formBox">
                <div className="row50">
                  <div className="inputBox">
                    <span>First Name</span>
                    <input type="text" placeholder="First Name" />
                  </div>
                  <div className="inputBox">
                    <span>Last Name</span>
                    <input type="text" placeholder="Last Name" />
                  </div>
                </div>

                <div className="row50">
                  <div className="inputBox">
                    <span>Email</span>
                    <input type="text" placeholder="Enter email" />
                  </div>
                  <div className="inputBox">
                    <span>Phone</span>
                    <input type="text" placeholder="Enter your phone number" />
                  </div>
                </div>

                <div className="row100">
                  <div className="inputBox">
                    <span>Message</span>
                    <textarea placeholder="Write your message here..."></textarea>
                  </div>
                </div>

                <div className="row100">
                  <div className="inputBox">
                    <input type="submit" value="Send" />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="contact info">
            <h2>Contact info</h2>
            <div className="infoBox">
              <div>
                <span>
                  <img src="https://cdn-icons-png.flaticon.com/512/2838/2838912.png" />
                </span>
                <p>
                  Cracov <br /> POLAND
                </p>
              </div>
              <div>
                <span>
                  <img src="https://cdn-icons-png.flaticon.com/512/646/646094.png" />
                </span>
                <a href="mailto:zzosdunk.gmail.com">zzosdunk@gmail.com</a>
              </div>
              <div>
                <span>
                  <img src="https://cdn-icons-png.flaticon.com/512/159/159832.png" />
                </span>
                <a href="tel:+48730527186">+48 730 527 186</a>
              </div>
              <ul className="sci">
                <li>
                  <a href="#">
                    <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174848.png" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="https://cdn-icons-png.flaticon.com/512/3291/3291695.png" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="contact map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81987.56453503725!2d19.934833868771268!3d50.046744577042666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471644c0354e18d1%3A0xb46bb6b576478abf!2zS3Jha8Ozdw!5e0!3m2!1spl!2spl!4v1672189337142!5m2!1spl!2spl"></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
