import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Textandhead from '../components/Textandhead';
import Herotext from 'components/Herotext';

import hero from 'assets/images/temple/templehero.png';
import draft from 'assets/images/temple/templedraft.png';
import iteration from 'assets/images/temple/templeiteration.png';
import final from 'assets/images/temple/templefinal.png';

const TemplePage = () => {
  return (
    <Layout pageName="temple">
      <Helmet>
        <title>Temple</title>
      </Helmet>
      <Container>

        <div className="wrapper">

          <Herotext main="Temple" sub="Faith and fitness" />

        </div>
          <img src={hero} alt="temple hero" className="heroImg" />

        <div className="wrapper">  

          <Textandhead head="The Brief" para="After gaining success through word of mouth, the head coach of Temple needed a logo. I was approached and asked if I could help with a logo and brand direction. The idea behind the business was a faith-based coaching program with a portion of the profits going towards churches. The logo needed to be unisex, bold, Temple was to be in all caps, and incorporate negative space." />

          <Textandhead head="First Draft" para="I instantly had three separate ideas; one was Greek inspired, the second was minimal and sans-serif, and the third was using motion. For the badge I pictured something that was distinct but simple. I had to take in to account it would be printed so I did not want too many small details." />
        </div>

          <img src={draft} alt="Initial wireframes" />

        <div className="wrapper">

          <Textandhead head="Iterations" para="The coach chose the one in the middle. She had asked if there was a way to incorporate a barbell in to the design. I began to look at the whitespace in between the letters of Temple. I noticed that the M and P lined up to look like a bar. I added two blocks to act like the weights. " />

        </div>  

          <img src={iteration} alt="iterations" />

        <div className="wrapper">

          <Textandhead head="Final" para="The taller logo was chosen and the final request from me was to add in the colors. I used Color.review to make sure the contrast was high enough as well. I was provided with a swatch by the coach and all of the colors used were accessible." />

        </div>  
          <img src={final} alt="final" />


      </Container>
    </Layout>
  );
};

export default TemplePage;