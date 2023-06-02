import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  useEffect(function () {
    document.title = "Contact";
  }, []);
  return (
    <>
      <section className="contact">
        <div className="contact-paragraf">
          <h1>Contact Page</h1>
          <p>
            Kamu dapat liat aku pansos di medsos yang gk aku arahin ke akun-ku
            dibawah ini:
          </p>
        </div>
        <ul className="contact-list">
          <li className="contact-item">
            <Link to="/medsos">Instagram</Link>
          </li>
          <li className="contact-item">
            <Link to="/medsos">Twitter</Link>
          </li>
          <li className="contact-item">
            <Link to="/medsos">Facebook</Link>
          </li>
        </ul>
      </section>
    </>
  );
}
