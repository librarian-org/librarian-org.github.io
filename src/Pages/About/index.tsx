import React from 'react';
import Content from '../../Components/Content';

import {
  Article,
  Section,
  SubHeader,
  SubTitle,
  Wrapper,
  Column60,
  Hero,
  HeroPlacer,
  Column30,
  Row,
} from './styles';

import loginImg from '../../assets/screenshots/librarian-login.png';

const About: React.FC = () => {
  document.title = 'About Librarian | Librarian Org';
  return (
    <>
      <Hero>
        <HeroPlacer />
        <Wrapper>
          <Content>
            <h1>About Librarian</h1>
            <SubTitle>Why an open source library manager?</SubTitle>

            <p>
              Librarian is built and mantained by&nbsp;
              <a href="https://github.com/danilolutz" target="_blank">
                Danilo Lutz
              </a>
              .
            </p>
            <p>
              Librarian is built with&nbsp;
              <a href="https://www.electronjs.org/" target="_blank">
                ElectronJS
              </a>
              , and&nbsp;
              <a href="https://reactjs.org/" target="_blank">
                ReactJS
              </a>
              &nbsp;a lovely web framework.
            </p>
          </Content>
        </Wrapper>
      </Hero>
      <Article>
        <Section>
          <Wrapper>
            <Content>
              <Row>
                <Column60>
                  <SubHeader>Origin Story</SubHeader>
                  <p>
                    I'm not a librarian and I do not work in or even in
                    education, but my mother is a teacher in my hometown.
                  </p>

                  <p>
                    As a developer, I was frustrated to find that my hometown
                    schools are not using software to handle library books. So I
                    decided to develop a simple but cool software for them.
                  </p>

                  <p>
                    And of course I called some friends to help me with this
                    project. So, to them, my thanks:&nbsp;
                    <a href="https://github.com/AndreLZGava">André Gava</a>
                    &nbsp;and&nbsp;
                    <a href="https://github.com/rafaeldpaula">
                      Rafael de Paula
                    </a>
                    .
                  </p>
                </Column60>
                <Column30>
                  <figure>
                    <a href={loginImg}>
                      <img
                        width="400px"
                        alt="The Librarian login screen. A screen that asks for username, password an hora a blue login button."
                        src={loginImg}
                      />
                    </a>
                    <figcaption>
                      The first screenshot of Librarian running.
                    </figcaption>
                  </figure>
                </Column30>
              </Row>
            </Content>
          </Wrapper>
        </Section>
      </Article>
    </>
  );
};

export default About;
