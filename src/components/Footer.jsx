import "./Footer.css";

function Footer() {
  return (
    <footer id="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>NylHaven</h3>
          <p>Your trusted source for vintage and modern vinyl records.</p>
        </div>


        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: <a href="">support@nylhaven.com</a></p>
          <p>Hours: Mon-Fri, 9am-6pm</p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 NylHaven. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;