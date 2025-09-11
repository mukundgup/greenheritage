import React from "react";
import "./footer.css";
import footerlogo from './imagesheader/Welcome.webp';
const Footer = () => {
  return (
    <footer className="Saying-footer">
      <div className="Saying-container">
        <div className="Saying-column Saying-logo-column">
          <div className="footerlogo">

          <img
            src={footerlogo}
            alt="Green Heritage Logo"
            className="Saying-logo"
            style={{backgroundColor:"white"}}
          />
          </div>

          <p className="Saying-description">
            Embrace a timeless elegance that embodies sophistication and an unwavering
            commitment to refined excellence.
          </p>
        </div>

        <div className="Saying-column">
          <h3 className="Saying-title">Our Cottages</h3>
          <ul>
            <li><a href="/cottages/floating">Floating Mushroom Cottage</a></li>
            <li><a href="/cottages/safari">Safari Cottage</a></li>
            <li><a href="/cottages/mushroomCottage">Mushroom Cottage</a></li>
            <li><a href="/cottages/singlex">Singlex Cottage</a></li>
            <li><a href="/cottages/duplex">Duplex Cottage</a></li>
            <li><a href="/cottages/treehouse">Tree House Cottage</a></li>
            <li><a href="/cottages/homestay">Home Stay Cottage</a></li>
            <li><a href="/cottages/row">Row Cottage</a></li>
            <li><a href="/cottages/mudsafari">Mud Safari Cottage</a></li>
            <li><a href="/cottages/mudmushroom">Mud Mushroom Cottage</a></li>
          </ul>

        </div>

        <div className="Saying-column">
          <h3 className="Saying-title">Usefull Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/tourism">Tourism</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>

        </div>

        <div className="Saying-column">
          <h3 className="Saying-title">Contact Us</h3>
          <p><strong>Resort Address:</strong> Green Heritage Resort, Narwar, Bandhavgarh, Dist – Umaria, M.P. 484664</p>
          <p><strong>Green Heritage Town & Resort Pvt. Ltd. (Corporate Office)</strong><br />
            Green Heritage Town<br />
            Near Hanuman Mandir,<br />
            St. Aloysius School Road, Gortara,<br />
            Shahdol, M.P</p>
          <p><strong>Email:</strong> greenheritageindia@gmail.com</p>
          <p><strong>Phone:</strong> +91 9770358048</p>
        </div>
      </div>

      <div className="Saying-bottom">
        © 2024 Green Heritage Restort Limited. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
