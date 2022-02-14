import React from 'react';

import { Container, Subtitle, Title } from './styles';
import Card from '../../Components/Card';

const Home: React.FC = () => {
  return (
    <Container>
      <Title>
        <h1>Simple and easy to use library manager</h1>
      </Title>
      <Subtitle>
        <h2>The most simplest, easiest, best looking library manager system.</h2>
      </Subtitle>
      <Card />
    </Container>
  );
};

export default Home;
