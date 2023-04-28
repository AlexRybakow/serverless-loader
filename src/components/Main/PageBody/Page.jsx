import './Page.scss';
import Typed from "react-typed"

export const Main = () => {
  return (
    <section className="contactUs">
      <p className="contactUs__text">
        // serverless.team is loading...
      </p>
      <section className="contactUs__container">
       <p>We take care of <span className="contactUs__serverless">
        <Typed
      strings={[
            "serverless",
          ]}
          typeSpeed={300}
          backSpeed={300}
          loop
        /></span> <br/> development so you can focus <br/> on your business </p>
      </section>
    </section>
  )
}