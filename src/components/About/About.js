import { Fragment } from "react";
import about from "./About.module.css";

const AboutUs = () => {
  const content = `E-commerce is an example of a company that nails its About Us page design
   while doing a great job at telling the world its story that tells the world their story. 
   Their page shows how important it is for them to talk about their mission to help people start, 
   run, and grow a business. The company prides itself in making ecommerce easier for everyone. 
   Also, it paints a picture of the future for E-commerce by mentioning that they’re building a 
   100-year company by investing in their people and the planet.`;
  return (
    <Fragment>
      <div className={about.container}>
        <h3 className={about.title}>About Us</h3>
        <p className={about.content}>{content}</p>
      </div>
    </Fragment>
  );
};

export default AboutUs;
