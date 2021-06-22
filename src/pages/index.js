import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import gsap, { Power3 } from 'gsap';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Herocard from '../components/Herocard';
import Introoverlay from '../components/Introoverlay'

import hello from 'assets/images/hello.svg';
import perfpackhome from 'assets/images/homepage/perfpack.png';
import travelhome from 'assets/images/homepage/travelerredux.png';
import templehome from 'assets/images/homepage/temple.png';
import corhome from 'assets/images/homepage/corthumbnail.jpg';
import abouthome from 'assets/images/homepage/about.png';
import contact from 'assets/images/homepage/contact.png';
// import { func } from 'prop-types';


const IndexPage = () => {

  // gsap.from(".wrapper", { duration:0, css: { visibility: "hidden" } });

  useEffect(() => {
    gsap.timeline()
    .to('.introtitle', {
      // duration: .6,
      opacity: 0,
      y: -70,
      delay: .6,
      skewY: -10,
      ease: Power3.out
    })
    .to('.overlay', {
      height: 0,
      duration: .6,
      // delay: 1,
      ease: Power3.out
    }) 
    .from('.indexAni', {
      skewX: '45deg',
      delay: .4,
      y: 20,
      duration: .5,
      opacity: 0,
      ease: Power3.out
    })
    .from('.Herogallery',
      {
        y: 100,
        duration: .6,
        opacity: 0,
        delay: .2
      }
    )
  })

  return (
    

    <Layout pageName="home">
      <Introoverlay/>
      <Helmet>
        <title>Home Page</title>
      </Helmet>


      <Container>

        <div className="wrapper">
        
          <img className="hello indexAni" src={hello} alt="hello" />

            <h1 className="indexAni">I'm Nick Zart. <br/>I'm a UI Designer & Coffee Nerd.</h1>

            <div className="Herogallery">
              <Herocard page="/perfpack" imgSrc={perfpackhome} altTag="Performance packaging" title="Performance Packaging" desc="Web Design" />
              <Herocard page="/traveler" imgSrc={travelhome} altTag="Traveler App" title="Traveler" desc="UI Design" />
              <Herocard page="/crownofred" imgSrc={corhome} altTag="Crown of Red" title="Crown Of Red" desc="UI Design & Branding" />
              <Herocard page="/temple" imgSrc={templehome} altTag="Temple" title="Temple" desc="Branding" />
              <Herocard page="/about" imgSrc={abouthome} altTag="About" title="About" desc="My Life" />
              <Herocard page="/contact" imgSrc={contact} altTag="Mountain" title="Contact" desc="Slide in the DMs" />
            </div>


        </div>
      </Container>


    </Layout>
  );
};

export default IndexPage;
