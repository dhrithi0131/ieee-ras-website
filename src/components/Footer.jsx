import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            IEEE RAS
          </Link>

          <p>VIT Chennai</p>

          <span>ASPIRE. CREATE. AUTOMATE.</span>
        </div>

        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/domains">Domains</Link>
          <Link to="/events">Events</Link>
          <Link to="/join">Join</Link>
        </div>

        <div className="footer-socials">
          <a
            href="https://www.instagram.com/ieeerasvitc/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
            <ArrowUpRight size={16} />
          </a>

          <a
            href="https://www.linkedin.com/company/ieeerasvitc/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 IEEE RAS VIT Chennai</span>

        <Link to="/join">
          Get involved
          <ArrowUpRight size={15} />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;