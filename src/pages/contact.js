import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import gsap, { Power3 } from 'gsap';

import Layout from 'components/Layout';
import Container from 'components/Container';

import Contact from 'assets/images/contact.svg';  

const Contactpage = () => {

  useEffect(() => {
    gsap.from('.contactAni', {
      opacity: 0,
      y: 20,
      duration: .5,
      delay: .4,
      ease: Power3.out
    })
  })

  return (
    <Layout pageName="contact">
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Container>
        <div className="wrapper flexgrowthing">

          <img className="hello contactAni" src={Contact} alt="Contact" />

          <div className="contact contactAni">
            
            <h1>Got a project? Employment opportunity? Need someone to vent to? Coffee? Contact me!</h1>

            <h2>Please feel free to email me with any inquiries!</h2>

            <a href="mailto:imnickzart@gmail.com">imnickzart@gmail.com</a>

            {/* <form>
              <label for="name">Name</label>
              <input type="text" id="name" />

              <label for="email">Email</label>
              <input type="text" id="email"></input>

              <label for="message">Message</label>
              <textarea></textarea>

              <a href="mailto:imnickzart@gmail.com"><button>Send Email</button></a>
            </form> */}

          </div>
          
        </div>
      </Container>
    </Layout>
  );
};

export default Contactpage;