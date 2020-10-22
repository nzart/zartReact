import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Textandhead from '../components/Textandhead';

import hero from 'assets/images/fit/healthHero.png';
import idea from 'assets/images/fit/idea.jpg';
import wireframe from 'assets/images/fit/fitnessWire.png';
import hifi from 'assets/images/fit/fitnessHifi.png';
import graphics from 'assets/images/fit/graphics.png';

const HealthPage = () => {
  return (
    <Layout pageName="threestepshealth">
      <Helmet>
          <title>Three Steps</title>
      </Helmet>
      <Container>

        <div className="wrapper">

          <div className="heroText">
            <h1>Three Steps Health</h1>
            <h2>A new approach to health that doesn't count calories.</h2>
          </div>

        </div>
          <img src={hero} alt="Three Steps hero" className="heroImg" />

        <div className="wrapper">  

          <Textandhead head="Problem & Research" para="According to research done by the University of Washington and Georgia institute of technology, people struggle with food journaling technology. A few key frustrations were that logging food entries took too much effort, it was time consuming, and they even felt judged while doing it." />

        </div>

        <div className="wrapper">

          <Textandhead head="Ideation" para="The biggest concern I had after looking at the research was the fact that people felt judged while using the app. So I wanted to get away from having users track calories, steps, or weight. I wanted to have users build better relationships with themselves and food. My first solution was to move away from counting calories. I am not a nutritionist but there is probably more to health than calories. The next two solutions were to encourage exercise everyday and to build a better relationship with food. After focusing on physical health I thought about how to add in mental health. The result is Three Steps Health. An app that encourages exercise, home-made meals, and reading an article on mental health. The app is focused on taking care of yourself everyday." />

        </div>

					<img src={idea} alt="Idea and sketch" />

        <div className="wrapper">

					<Textandhead head="Wire"/>

				</div>  

					<img src={wireframe} alt="Wireframes" />

				<div className="wrapper">

					<Textandhead head="Graphics" para="The three triangles in the logo represent the three daily activities in the app. Most health and fitness app either have an orange or green as their primary color. Orange is normally used for fitness while green is generally used in nutrition. Orange was chosen to be the primary color as is it is often considered to be a happy and energetic color. It is not used too much in the app as orange can also be overbearing. Montserrat is the chosen typeface as it is minimal and modern while also legible when given different weights." />

				</div>

					<img src={graphics} alt="Graphics" />

				<div className="wrapper">

					<Textandhead head="Hifi"/>

				</div>

					<img src={hifi} alt="Hifi" />

            </Container>
        </Layout>
    );
};

export default HealthPage;