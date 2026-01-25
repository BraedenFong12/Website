import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-text">
                    © {currentYear} Braeden Fong. Built with React.
                </p>
                <div className="footer-links">
                    <a
                        href="https://github.com/braedenfong12"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                    <span className="footer-divider">•</span>
                    <a
                        href="https://www.linkedin.com/in/braeden-fong-633114268/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
