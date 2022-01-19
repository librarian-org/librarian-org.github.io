import { Link as RouterLink } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;

  a {
    display: inline-block;
    font-size: 13px;
    line-height: 1;
    font-weight: bold;
    outline: 0;
    border: 0;
    padding: 0.6em 0.8em;
    border-radius: 0.65em;
    transition: background 0.2s ease-in-out;
    text-align: center;
    cursor: pointer;

    padding-left: 0.6em;
    padding-right: 0.6em;
    min-width: 80px;

    margin-right: 2px;
    margin-left: 2px;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      text-decoration: none;
    }
  }
`;

export const StyledLink = styled(RouterLink)`
  display: flex;
`;
