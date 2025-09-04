import '../App.css';
function Footer() {
  return (
  
    <footer className="footer">
      <div className="footer-left">
        <img src="/Logo (1).png" alt="logo" className="footer-logo" />
        <p className="footer-text">
          Copyright © 2023 Nexcent. <br />
          All rights reserved
        </p>
        <div className="footer-icons">
          <img src="/instagram.webp" alt="facebook" />
          <img src="/twitter.png" alt="twitter" />
          <img src="/linkedin.png" alt="linkedin" />
          <img src="/youtube.webp" alt="youtube" />
        </div>
      </div>

      <div className="footer-right">
        <div className="footer-col">
          <h5>Company</h5>
          <p>About us</p>
          <p>Blog</p>
          <p>Contact us</p>
          <p>Pricing</p>
          <p>Testimonials</p>
        </div>
        <div className="footer-col">
          <h5>Support</h5>
          <p>Help center</p>
          <p>Terms of service</p>
          <p>Legal</p>
          <p>Privacy policy</p>
          <p>Status</p>
        </div>
        <div className="footer-col">
          <h5>Stay up to date</h5>
          <input
            type="email"
            placeholder="Your email address"
            className="footer-input"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
