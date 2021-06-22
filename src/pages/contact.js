import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import gsap, { Power3 } from 'gsap';

import Layout from 'components/Layout';
import Container from 'components/Container';

import Contact from 'assets/images/contact.svg';   

const Contactpage = () => {

  useEffect(() => {
    gsap.timeline()
    .from('.contactAni', {
      skewX: '45deg',
      delay: .4,
      y: 20,
      duration: .5,
      opacity: 0,
      ease: Power3.out
    })
    .from('.contact', {
      y: 20,
      opacity: 0,
      duration: .5,
      delay: .4
    })
  })

  return (
    <Layout pageName="contact">
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Container>
        <div className="wrapper">

          <img className="otherhello contactAni" src={Contact} alt="Contact" />
          

          <div className="contact">

            <section>
            <h2>Got a project? Employment opportunity?</h2>
              <h2>Please feel free to email me with any inquiries!</h2>
              <a href="mailto:imnickzart@gmail.com">imnickzart@gmail.com</a>
            </section>

          </div>
          
        </div>
      </Container>
    </Layout>
  );
};

export default Contactpage;