import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './footer.scss'
const Footer: FC = () => {
  return (
    <footer className='footer'>
      <a href='https://www.facebook.com/' className="footer__item">Fb</a>
      <a href='https://www.twitter.com/' className="footer__item">Tw</a>
      <a href='https://www.linkedin.com/' className="footer__item">In</a>
      <Link to="/about" className="footer__about">About us</Link>
    </footer>
  );
};

export default Footer;