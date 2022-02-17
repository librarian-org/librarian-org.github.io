import React from 'react';

import {
  Article,
  Hero,
  HeroPlacer,
  SectionFree,
  Subtitle,
  Title,
  Wrapper,
} from './styles';
import Card from '../../Components/Card';
import Content from '../../Components/Content';

const Home: React.FC = () => {
  document.title = 'Open Source Library Manager | Librarian Org';
  return (
    <>
      <Hero>
        <HeroPlacer />
        <Wrapper>
          <Content>
            <Title>Simple and easy to use library manager</Title>
            <Subtitle>
              <h2>
                The most simplest, easiest, best looking library manager system.
              </h2>
            </Subtitle>
          </Content>
        </Wrapper>
      </Hero>
      <Article>
        <SectionFree>
          <Wrapper>
            <Content>
              <Card />
            </Content>
          </Wrapper>
        </SectionFree>
      </Article>
    </>
  );
};

export default Home;
