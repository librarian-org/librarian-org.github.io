import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 1024px;
  @media (min-width: 992px) {
    padding-top: 10em;
  }
`;

export const Title = styled.article`
  display: flex;
  color: #f1f1f1;

  width: 70%;
  @media (max-width: 992px) {
    width: 100%;
  }

  h1 {
    font-size: 3.8em;
    font-weight: 600;
  }
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
    font-weight: 600;
  }
`;

