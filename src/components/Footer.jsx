import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-4">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-36">
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary">
                  About
                </a>
              </li>
              <li>
                <a href="#popular" className="text-gray-300 hover:text-primary">
                  Products
                </a>
              </li>
              <li>
                <a href="#review" className="text-gray-300 hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Popular Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#popular" className="text-gray-300 hover:text-primary">
                  Smart Watch Pro
                </a>
              </li>
              <li>
                <a href="#popular" className="text-gray-300 hover:text-primary">
                  ASUS ROG
                </a>
              </li>
              <li>
                <a href="#popular" className="text-gray-300 hover:text-primary">
                  Camera
                </a>
              </li>
              <li>
                <a href="#popular" className="text-gray-300 hover:text-primary">
                  HyperX
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: 644259049@webmail.npru.ac.th</li>
            </ul>

            <div className="social_icons flex gap-4 mt-4">
              <div className="icon">
                <a
                  href="https://www.instagram.com/aum.ktpd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-2xl hover:text-primary" />
                </a>
              </div>

              <div className="icon">
                <a
                  href="https://www.facebook.com/profile.php?id=100015293261179"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-2xl hover:text-primary" />
                </a>
              </div>

              <div className="icon">
                <a
                  href="https://github.com/Aumkitti"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-2xl hover:text-primary" />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-footer flex justify-center mt-4">
        <p className="text-center">
          Copyright &copy;
          <a href="#home" style={{ textDecoration: "none" }}>
            Kittipong
          </a>{" "}
          - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
