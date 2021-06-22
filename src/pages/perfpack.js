import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Textandhead from '../components/Textandhead';
import Herotext from 'components/Herotext';

import hero from 'assets/images/perfpackaging/perfhero.png';
import comp from 'assets/images/perfpackaging/perfcomponents.png';
import wireframe from 'assets/images/perfpackaging/perfwire.png';
import hifi from 'assets/images/perfpackaging/perfhome.png';
import testone from 'assets/images/perfpackaging/perffirst.png';
import testtwo from 'assets/images/perfpackaging/perftwo.png';

const PerfPackPage = () => {
  return (
    <Layout pageName="perfpackaging">
      <Helmet>
          <title>Performance Packaging</title>
      </Helmet>
      <Container>

        <div className="pagewrapper">

          <Herotext main="Performance Packaging" sub="A new look." />

          <img src={hero} alt="performance packaging hero" className="heroImg" />

          <a className="linkperf" target="_blank" href="https://performancepackaginginc.com/"><h1>See it live.</h1></a>

          <Textandhead head="Overview" para="Performance Packaging is a packaging company based in South Carolina. They were looking for a redesign of their website as it has been the same since it's inception." />


          <Textandhead head="Roles and Responsibilities" para="I had sole ownership of the UI and development for the website. I was given photos and videos from the videographer as well. I was to check in with the Project Manager at each stage to receive feedback. The only contstraint was to keep the copy the same as the old website." />


					{/* <img src={idea} alt="Idea and sketch" /> */}



					<Textandhead head="Process" para="The first step was to research competitors website. The two common themes I saw with other packaging companies websites were product photography and clear typography work. From there I set out to create wireframes and web components that showcased and explained their products." />


					<img src={wireframe} alt="Wireframes" className="portimg" />
					<img src={comp} alt="Components" className="portimg" />


					<Textandhead head="Testing" para="An A/B test was done to maximize the conversion rate of viewing the Capabilities page. The Button design was altered to look less like a pill as well as adding a heavier font weight which resulted in a 37% increase in conversion rate." />

				

					<img src={testone} alt="first test" className="portimg"/>
					<img src={testtwo} alt="second test" className="portimg"/>
					<img src={hifi} alt="Hifi" className="portimg"/>

          </div>
            </Container>
        </Layout>
    );
};

export default PerfPackPage;