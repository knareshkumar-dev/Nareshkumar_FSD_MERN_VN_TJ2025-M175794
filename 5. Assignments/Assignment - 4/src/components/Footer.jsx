import '../styles/footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About College</h3>
            <p>
              B.S Abdur Rahman Crescent Institute of Science and Technology, 
              located in Chennai, is a premier institution dedicated to excellence 
              in engineering and management education.
            </p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <p><a href="/">Home</a></p>
            <p><a href="/about">About Us</a></p>
            <p><a href="/departments">Departments</a></p>
            <p><a href="/contact">Contact</a></p>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>📍 Chennai, Tamil Nadu, India</p>
            <p>📧 info@bsacri.ac.in</p>
            <p>📞 +91-44-XXXX-XXXX</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <p><a href="#">Facebook</a></p>
            <p><a href="#">Twitter</a></p>
            <p><a href="#">LinkedIn</a></p>
            <p><a href="#">Instagram</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} B.S Abdur Rahman Crescent Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
