import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Textandhead from '../components/Textandhead';
import Herotext from 'components/Herotext';

import hero from 'assets/images/traveler/travelhero.png';
import firstWire from 'assets/images/traveler/travelerFirstWire.png';
import finalWire from 'assets/images/traveler/travelerFinalWire.png';
import HiFi from 'assets/images/traveler/travelerHiFi.png';

const TravelerPage = () => {
  return (
    <Layout pageName="traveler">
      <Helmet>
        <title>Traveler</title>
      </Helmet>
      <Container>

        <div className="wrapper">

          <Herotext main="Traveler" sub="The Itinerary App" />

        </div>
          <img src={hero} alt="Travler hero" className="heroImg" />

        <div className="wrapper">  

          <Textandhead head="The Problem" para="Traveling can provide unique world views and is an opportunity for people to experience a new city, region, state, country, or continent. People can get caught up with planning and end up frustrated trying to create a plan." />

          <Textandhead head="Initial Wireframe" para="The first idea was to have users choose a city, select a few interests and have the app create a custom itinerary. While designing the wireframes the app lacked any substance. While it would be a custom itinerary, there was not much room for the users to grow. They would be relying on an app too much and wouldn't have an opportunity to change how they travel. Like travel, technology should help us grow." />
        </div>

          <img src={firstWire} alt="Initial wireframes" />

        <div className="wrapper">

          <Textandhead head="Final Wireframe" para="The final wireframes had users choose a city and then they could either browse itineraries or activities. Users could also create their own itinerary." />

        </div>  

          <img src={finalWire} alt="Final wireframes" />

        <div className="wrapper">

          <Textandhead head="HiFi" para="The final designs used a lot of pictures for a reason. By using as many pictures as possible, users would see what cities have to offer and would be inspired to travel." />

        </div>  
          <img src={HiFi} alt="HiFi" />


      </Container>
    </Layout>
  );
};

export default TravelerPage;