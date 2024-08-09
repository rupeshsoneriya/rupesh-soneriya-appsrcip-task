import React from "react";
import "../css/Footer.css";
import "../css/style.css";
import amx from "../assets/amx.svg";
import gPay from "../assets/googlePayIcon.svg";
import mastercard from "../assets/mastercardIcon.svg";
import instragramIcon from "../assets/instragramIcon.svg";
import linkdinIcon from "../assets/linkdinIcon.svg";
import payPalIcon from "../assets/payPalIcon.svg";
import usaFlag from "../assets/usaFlag.svg";
import appleIcon from "../assets/appleIcon.svg";
import payIcon from "../assets/payIcon.svg";

function Footer() {
  return (
    <div className="footer">
      <footer class="footer">
        <div class="custom-container">
          <div className=" custom-row foter-newsletter-contact-us">
            <div className="custom-lx-6 custom-lg-6 custom-md-6 custom-sm-12 custom-sx-12">
              <div class="newsletter">
                <h2>Be the first to know</h2>
                <p className="desktop-text">
                  Sign up for updates from mettā muse.
                </p>
                <p className="mobile-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. this is simply dummy text.
                </p>
                <div class="newsletter-input">
                  <input
                    type="email"
                    placeholder="Enter Your E-Mail..."
                    aria-label="Email"
                  />
                  <button type="button">Subscribe</button>
                </div>
              </div>
            </div>
            <div className="custom-lx-6 custom-lg-6 custom-md-6 custom-sm-12 custom-sx-12">
              <div class="contact-us">
                <h2 className="call-us">CALL US</h2>
                <h2 className="contact-us">Contact Us</h2>
                <div className="contact-info" style={{ display: "flex" }}>
                  <p>+44 221 133 5360</p>
                  <b></b>
                  <p>customercare@mettamuse.com</p>
                </div>

                <div class="currency">
                  <h2>Currency</h2>
                  <p>
                    <img src={usaFlag} alt="US Flag" /> <b></b> USD
                  </p>
                  <p>
                    Transactions will be completed in Euros and a currency
                    reference is available on hover.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="custom-row lnks-follow-social-media">
            <div className="custom-lg-4 custom-lg-4 custom-md-4 custom-sm-12 custom-xs-12">
              <div className="mettā muse desktop-view">
                <h2>mettā muse</h2>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Stories</a>
                  </li>
                  <li>
                    <a href="#">Artisans</a>
                  </li>
                  <li>
                    <a href="#">Boutiques</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">EU Compliances Docs</a>
                  </li>
                </ul>
              </div>
              <div className="mettā muse mobile-view">
                <select className="metta-muse">
                  <option>mettā muse</option>
                  <option value="">About Us</option>

                  <option value="">Stories</option>

                  <option value="">Artisans</option>

                  <option value="">Boutiques</option>

                  <option value="">Contact Us</option>

                  <option value="">EU Compliances Docs</option>
                </select>
              </div>
            </div>
            <div className="custom-lg-4 custom-lg-4 custom-md-4 custom-sm-12 custom-xs-12">
              <div class=" links desktop-view">
                <div>
                  <h2>Quick Links</h2>
                  <ul>
                    <li>
                      <a href="#">Orders & Shipping</a>
                    </li>
                    <li>
                      <a href="#">Join/Login as a Seller</a>
                    </li>
                    <li>
                      <a href="#">Payment & Pricing</a>
                    </li>
                    <li>
                      <a href="#">Return & Refunds</a>
                    </li>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms & Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="links mobile-view">
                <select className="metta-muse">
                  <option>Quick Links</option>

                  <option value="">Orders & Shipping</option>

                  <option value="">Join/Login as a Seller</option>

                  <option value="">Payment & Pricing</option>

                  <option value="">Return & Refunds</option>

                  <option value="">FAQs</option>

                  <option value="">Privacy Policy</option>

                  <option value="">Terms & Conditions</option>
                </select>
              </div>
            </div>

            <div className="custom-lg-4 custom-lg-4 custom-md-4 custom-sm-12 custom-xs-12">
              <div class="follow-us">
                <h2>Follow Us</h2>
                <div class="social-media">
                  <a href="#">
                    <img src={instragramIcon} alt="Instagram" />
                  </a>
                  <a href="#">
                    <img src={linkdinIcon} alt="LinkedIn" />
                  </a>
                </div>

                <div class="payments">
                  <h2>mettā muse Accepts</h2>
                  <div class="payment-icons">
                    <img src={gPay} alt="Google Pay" />
                    <img src={mastercard} alt="Mastercard" />
                    <img src={payPalIcon} alt="PayPal" />
                    <img src={amx} alt="Amex" />
                    <img src={appleIcon} alt="Apple Pay" />
                    <img src={payIcon} alt="Pay" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="footer-copyright">
          Copyright © 2023 mettamuse. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
