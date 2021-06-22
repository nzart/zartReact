import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Textandhead from '../components/Textandhead';
import Herotext from 'components/Herotext';

import hero from 'assets/images/cor/coffeehero.jpg';
import styleguide from 'assets/images/cor/styleguide.png';
import three from 'assets/images/cor/crownlogo3.png';
/* import business from 'assets/images/cor/corbusinesscard.jpg';
import menu from 'assets/images/cor/coffeemenu.jpg'; */
import social from 'assets/images/cor/corsocial.png'
import home from 'assets/images/cor/cohomepage4.jpg'

const CORPage = () => {
  return (
    <Layout pageName="crownofred">
      <Helmet>
          <title>Crown Of Red</title>
      </Helmet>
      <Container>

        <div className="pagewrapper">

        <Herotext main="Crown of Red" sub="Coffee and community" />

        
          <img src={hero} alt="Crown of Red hero" className="heroImg" />

         

          <Textandhead head="Crown Of Red" para="Coffee, community, culture. Crown of Red is a coffee shop serving for the people. An artisan coffee shop without the air of superiority. It is meant to be a place of social gathering where friends can have a good time and the community can come together for a greater purpose." />

        


          <Textandhead head="Fonts & Colors" para="Raleway was chosen as the primary font as it has an art deco, vintage look but is still modern. Raleway will primarily be used for titles and headers while Montserrat is used for sub headings and bodies of text. Montserrat is an easy-to-read sans-serif font which makes it great for larger bodies of text." />
     

          <img src={styleguide} alt="Style guide" className="portimg" />


          <Textandhead head="Identity" para="Hummingbirds are adored by many. They are hard workers and have tons of energy which makes it a great representation for Crown of Red. In Native American folklore, hummingbirds were a symbol of healing which remains consistent with Crown of Red's mission to serve the community." />

          <img src={three} alt="3 Logos" className="portimg" />
          <img src={social} alt="Insta cor" className="portimg" />
          <img src={home} alt="Home" className="portimg" />
        
        </div>  


            </Container>
        </Layout>
    );
};

export default CORPage;