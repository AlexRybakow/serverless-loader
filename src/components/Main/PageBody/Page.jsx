import './Page.scss';
import { TypeAnimation } from 'react-type-animation';

export const Main = () => {
  return (
    <section className="contactUs">
      <p className="contactUs__text">
        // serverless.team is loading...
      </p>
      <section className="contactUs__container">
       <p className="contactUs__main">We take care of <span className="contactUs__serverless">
       <TypeAnimation
      sequence={[
        'serverless', 
        2000, 
        'Serverless', 
        2000, 
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
    /></span> <br/> development so you can focus <br/> on your business </p>
      </section>
    </section>
  )
}