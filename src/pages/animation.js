import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Textandhead from '../components/Textandhead';
import Herotext from 'components/Herotext';

import subway from 'assets/images/animation/subwaywindow.gif';
import ani from 'assets/images/animation/subscene.gif';

const CORPage = () => {
  return (
    <Layout pageName="animation">
      <Helmet>
          <title>Animation</title>
      </Helmet>
      <Container>

        <div className="wrapper">

        <Herotext main="Animation" sub="A selection of my favorite animations" />

        </div>

        <div className="wrapper">
            <div className="Herogallery">
                <img src={subway} alt="subway animation" />

            
            </div>  

        </div>  

            </Container>
        </Layout>
    );
};

export default CORPage;