import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './footer.scss'
const Footer: FC = () => {
  return (
    <footer className='footer'>
      <div className="footer__item">Fb</div>
      <div className="footer__item">Tw</div>
      <div className="footer__item">In</div>
      <Link to="/about" className="footer__about">About us</Link>
    </footer>
  );
};

export default Footer;