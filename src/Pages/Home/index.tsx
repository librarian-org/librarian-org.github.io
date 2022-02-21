import React from 'react';

import {
  Article,
  Hero,
  HeroPlacer,
  Highlight,
  SectionFree,
  Subtitle,
  Title,
  Wrapper,
  Column60,
  Column30,
  Row,
  VerticalCenter,
  Right,
  Step,
  Left,
} from './styles';
import Card from '../../Components/Card';
import Content from '../../Components/Content';

import titleImg from '../../assets/screenshots/librarian-title-edition.png';
import personImg from '../../assets/screenshots/librarian-person-contacts.png';
import borrowImg from '../../assets/screenshots/librarian-borrow-borrow.png';
import quickSearchImg from '../../assets/screenshots/librarian-quick-search.png';
import tabsImg from '../../assets/screenshots/librarian-lot-of-tabs.png';

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
                The most simplest, easiest, best looking library manager system,
                control your <strong>titles</strong>, <strong>borrows</strong>
                &nbsp;and <strong>more</strong>.
              </h2>
            </Subtitle>
          </Content>
        </Wrapper>
      </Hero>
      <Article>
        <Wrapper>
          <Content>
            <Highlight>Librarian Features</Highlight>

            <Row>
              <Column60>
                <VerticalCenter>
                  <Right>
                    <h3>Organize Your Titles</h3>

                    <p>
                      Organize, categorize your titles in simple and fast way...
                    </p>
                  </Right>
                </VerticalCenter>
              </Column60>
              <Step>
                <span>1</span>
              </Step>
              <Column30>
                <figure>
                  <img src={titleImg} width="500px" alt="The title screen" />
                </figure>
              </Column30>
            </Row>

            <Row>
              <Step>
                <span>2</span>
              </Step>
              <Column30>
                <figure>
                  <img src={personImg} width="500px" alt="The person screen" />
                </figure>
              </Column30>
              <Column60>
                <VerticalCenter>
                  <Left>
                    <h3>Organize People</h3>

                    <p>
                      Organize students, teacher, family, friends with contact
                      and address data.
                    </p>
                  </Left>
                </VerticalCenter>
              </Column60>
            </Row>

            <Row>
              <Column60>
                <VerticalCenter>
                  <Right>
                    <h3>Manage Borrowed Titles</h3>

                    <p>
                      Manage and track borrowed titles also you can reserve a
                      title for someone!
                    </p>
                  </Right>
                </VerticalCenter>
              </Column60>
              <Step>
                <span>3</span>
              </Step>
              <Column30>
                <figure>
                  <img src={borrowImg} width="500px" alt="The borrow screen" />
                </figure>
              </Column30>
            </Row>

            <Row>
              <Step>
                <span>4</span>
              </Step>
              <Column30>
                <figure>
                  <img src={tabsImg} width="500px" alt="The Tabs resource" />
                </figure>
              </Column30>
              <Column60>
                <VerticalCenter>
                  <Left>
                    <h3>Open Lots of Tabs</h3>

                    <p>
                      Open dozens of tabs so you can work quickly without having
                      to switch windows.
                    </p>
                  </Left>
                </VerticalCenter>
              </Column60>
            </Row>

            <Row>
              <Column60>
                <VerticalCenter>
                  <Right>
                    <h3>Find It, Fast!</h3>

                    <p>
                      With Librarian QuickSearch tool you can find almost
                      everything super fast.
                    </p>
                  </Right>
                </VerticalCenter>
              </Column60>
              <Step>
                <span>5</span>
              </Step>
              <Column30>
                <figure>
                  <img
                    src={quickSearchImg}
                    width="500px"
                    alt="The QuickSearch tool"
                  />
                </figure>
              </Column30>
            </Row>
          </Content>
        </Wrapper>
      </Article>
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
