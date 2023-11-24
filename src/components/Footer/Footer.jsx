import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__sign">Yaroslav Novik &#169; 2023</p>
      <a
        href="https://github.com/NovikYaroslav/fortech-test-work"
        target="_blank"
        rel="noreferrer"
        className="footer__link"
      >
        Github
      </a>
    </footer>
  );
}
