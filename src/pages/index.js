import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import gsap, { Power3 } from 'gsap';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Herocard from '../components/Herocard';

import hello from 'assets/images/hello.svg';
import travelhome from 'assets/images/homepage/travelerredux.png';
import templehome from 'assets/images/homepage/temple.png';
import corhome from 'assets/images/homepage/corthumb.png';
import abouthome from 'assets/images/homepage/about.png';
import contact from 'assets/images/homepage/contact.png';
import { func } from 'prop-types';


const IndexPage = () => {

  window.onload = function() {

  

  useEffect(() => {
    gsap.timeline()
    .from('.indexAni', {
      skewX: '45deg',
      delay: .6,
      y: 20,
      duration: .5,
      opacity: 0,
      ease: Power3.out
    }
    )
    .from('.Herogallery',
      {
        y: 100,
        duration: .6,
        opacity: 0,
        delay: .2
      }
    )
  })

}


  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <Container>
        <div className="wrapper">
        
          <img className="hello indexAni" src={hello} alt="hello" />

            <h1 className="indexAni">I'm Nick Zart. <br/>I'm a Visual Designer & UI Developer.</h1>

            <div className="Herogallery">
              <Herocard page="/traveler" imgSrc={travelhome} altTag="Traveler App" title="Traveler" desc="App Design" />
              <Herocard page="/temple" imgSrc={templehome} altTag="Temple" title="Temple" desc="Branding" />
              <Herocard page="/crownofred" imgSrc={corhome} altTag="Crown of Red" title="Crown Of Red" desc="Branding" />
              {/* <Herocard page="/health" imgSrc={mount} altTag="Mountain" title="Fitness" desc="App Design" /> */}
              <Herocard page="/about" imgSrc={abouthome} altTag="About" title="About" desc="My Life" />
              <Herocard page="/contact" imgSrc={contact} altTag="Mountain" title="Contact" desc="Slide in the DMs" />
            </div>


        </div>
      </Container>  


    </Layout>
  );
};

export default IndexPage;
