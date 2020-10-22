import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import gsap, { Power3 } from 'gsap';

import Layout from 'components/Layout';
import Container from 'components/Container';

import About from 'assets/images/about.svg';
import Me from 'assets/images/aboutme.png';  

const Aboutpage = () => {

  useEffect(() => {
    gsap.timeline()
    .from('.aboutAni', {
      skewX: '45deg',
      delay: .4,
      y: 20,
      duration: .5,
      opacity: 0,
      ease: Power3.out
    })
    .from('.about', {
      y: 20,
      opacity: 0,
      duration: .5,
      delay: .4
    })
  })

  return (
    <Layout pageName="about">
      <Helmet>
        <title>About</title>
      </Helmet>
      <Container>
        <div className="wrapper">

          <img className="hello aboutAni" src={About} alt="About" />

            <h2 className="aboutAni">Designer. Developer. Runner. Coffee nerd.</h2>

          <div className="about">
            
            <section>
            <p>I graduated from Clemson with a Bachelor of Science in Graphic Communications. I tailored my curriculum towards web design and development. I have learned to love both of the creative and technical sides of all things front end.</p>

            <p>My primary focus is on UI design but I have helped with branding projects as well. I enjoy being able to speak with business owners and helping their vision come to life.</p>

            <p>If I'm not designing or developing I am most likely running or having a nice cup of coffee. I geniunely love helping people and I aim to have a servant heart every day. I would love to help you with or project or be a part of your team.</p>

            <p>Dream big, work your ass off.</p>
            </section>

            <img className="me" src={Me} alt="Me" />

            </div>  
          
        </div>
      </Container>
    </Layout>
  );
};

export default Aboutpage;