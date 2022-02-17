import styled from 'styled-components';

export const Hero = styled.article`
  position: relative;
  padding-top: 10em;
  padding-bottom: 3rem;
  filter: saturate(0.86);
  overflow: hidden;
  background: #1a1a1a;

  h1 {
    font-size: 3rem;
    font-weight: 600;
    color: #f1f1f1;
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

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 992px) {
    padding-top: 7em;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 3rem;
    font-weight: 600;
    color: #f1f1f1;
  }

  &::after {
    height: 3em;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media (min-width: 992px) {
    width: 1024px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: normal;
`;

export const SubHeader = styled.h2`
  font-size: 2.2rem;
  margin-top: 0;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 992px) {
    flex-direction: row;
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

  figure {
    img {
      box-shadow: 0 0 0 1px rgb(0 0 0 / 3%), 0 1px 3px 0 rgb(0 0 0 / 12%),
        0 1px 2px rgb(0 0 0 / 15%);
    }

    a {
      display: inline-block;
      align-items: center;
      color: #1d6f93;
      text-decoration: none;
      cursor: pointer;
      position: relative;

      &:before {
        display: flex;
        justify-content: center;
        align-items: center;
        content: 'View';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(26, 26, 26, 0.8);
        border-radius: 4px;
        opacity: 0;
        transition: opacity 0.25s ease-in-out;
      }

      &:hover:before {
        opacity: 1;
      }
    }

    figcaption {
      position: relative;
      flex-direction: column;
      font-size: 0.7rem;
      padding: 0 1em;
      padding-left: 2.5em;

      &:before {
        content: '';
        position: absolute;
        top: 0.75em;
        left: 0.5em;
        height: 2px;
        width: 12px;
        background: #1d6f93;
      }
    }
  }
`;
