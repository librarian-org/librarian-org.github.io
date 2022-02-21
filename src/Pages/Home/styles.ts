import styled from 'styled-components';

export const Hero = styled.article`
  position: relative;
  padding-top: 10em;
  padding-bottom: 5rem;
  filter: saturate(0.86);
  overflow: hidden;
  background: #1a1a1a;

  h1 {
    padding-right: 8rem;
    font-size: 4rem;
    font-weight: 600;
    color: #f1f1f1;
    margin-bottom: 2rem;
  }
`;

export const HeroPlacer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  z-index: -1;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #1a1a1a;
    background-size: auto 110vw;
    opacity: 0.12;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 1024px;
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 3rem;
    font-weight: 600;
    color: #f1f1f1;
  }
`;

export const SectionFree = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;

  h1 {
    font-size: 3rem;
    font-weight: 600;
    color: #f1f1f1;
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: #1d6f93;
    z-index: -1;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  line-height: 1.15;
  font-weight: 600;
`;

export const Highlight = styled.h2`
  font-size: 2.2rem;

  text-align: center;

  padding-top: 6rem;
  padding-bottom: 6rem;

  font-weight: bold;
  color: rgba(255,255,255,0.87);
`;

export const Subtitle = styled.div`
  display: flex;
  color: #f1f1f1;

  width: 70%;
  @media (max-width: 992px) {
    width: 100%;
  }

  h2 {
    font-size: 1.6em;
    font-weight: normal;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
  padding-bottom: 4rem;

  @media (min-width: 992px) {
    flex-direction: row;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: bold;
    color: rgba(255,255,255,0.87);
  }
`;

export const Column60 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 992px) {
    width: 60%;
  }
`;

export const Column30 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (min-width: 992px) {
    width: 60%;
  }
`;

export const VerticalCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const Right = styled.div`
  text-align: right;
`;

export const Left = styled.div`
  text-align: left;
  margin-left: 5rem;
`;

export const Step = styled.div`
  position: relative;
  top: -6rem;
  left: 1.3rem;
  display: flex;
  color: #090909;
  font-weight: 700;
  font-size: 10rem;
  z-index: -1;

  span {
    position: relative;
  }
`;
