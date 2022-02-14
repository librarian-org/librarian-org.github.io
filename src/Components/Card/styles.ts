import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;
  margin-top: 250px;
  margin-bottom: 100px;
  width: 80%;
  display: flex;
  justify-content: center;
  font-size: 16px;

  background-color: #333;
  border-radius: 8px;

  padding: 24px 36px;

  box-shadow: 0 0 0 1px rgb(0 0 0 / 3%), 0 1px 3px 0 rgb(0 0 0 / 12%),
    0 1px 2px rgb(0 0 0 / 15%);

  span {
    color: #1d6f93;
  }

  h2 {
    font-size: 2.2rem;
    font-weight: 600;
  }

  p {
    padding: 16px 0;
  }

  ul {
    list-style: none;

    li {
      padding: 12px 8px;
    }
  }
`;

export const Strong = styled.strong`
  font-size: 24px;
`;
