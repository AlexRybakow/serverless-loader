/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './Footer.scss';
import blur from './assets/Blur.png'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo__conatainer">
        <a href="#" className="footer__logo">
        </a>
      </div>
      <div className="footer__container">
      <div className="footer__cta">
        <p className="footer__cta__text">Don't want to wait for our site launch?</p>
        <p className="footer__cta__text">Let's talk about your idea right now.</p>
      </div>
      <div className="footer__btn-block">
      <button className="footer__button">schedule a call</button>
      </div>
      <img src={blur} alt="blur" className="footer__blur"/>
      </div>
    </footer>
  );
}