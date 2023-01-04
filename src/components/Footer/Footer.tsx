import styles from "./Footer.module.css";

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles["footer-col-1"]}>
            <h3>Download Our App</h3>
            <p>Download App for iOS and Android mobile phone.</p>
            <div className={styles["app-logo"]}>
              <img
                src="https://i.postimg.cc/8PPQN4Kc/app-store.webp"
                alt="mobStore-img"
              />
              <img
                src="https://i.postimg.cc/N0RP12JZ/play-store.webp"
                alt="mobStore-img"
              />
            </div>
          </div>
          <div className={styles["footer-col-2"]}>
            <p>
              Our purpose is to sustainably make the pleasure and benefits of
              sports accessible to the many.
            </p>
          </div>
          <div className={styles["footer-col-3"]}>
            <h3>Useful Links</h3>
            <ul>
              <li>
                <a
                  href="https://github.com/zzosdunk/eshop"
                  target="_blank"
                  rel="noreferrer"
                >
                  Website Source Code
                </a>
              </li>
              <li>
                <a href="https://dzosym.com/" target="_blank" rel="noreferrer">
                  Personal Landing Page
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/zzosdunk"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
          <div className={styles["footer-col-4"]}>
            <h3>Follow Us</h3>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/denys-zosym-498b39141/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/zzosdunk"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/zonikmus/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="copyright">Copyright {year} - Denys Zosym</p>
      </div>
    </div>
  );
};

export default Footer;
