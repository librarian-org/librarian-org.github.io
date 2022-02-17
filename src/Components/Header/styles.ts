import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import { tint } from 'polished';

export const Container = styled.header`
  display: flex;
  position: absolute;
  width: 100%;
  height: 6em;
  padding: 0 24px;
  align-items: center;

  transition: height 0.2s ease-in-out;
  flex-wrap: wrap;
  box-sizing: border-box;
  flex: 0 1 auto;
  flex-direction: row;

  justify-content: space-between;
  z-index: 10;
  figure {
    a {
      text-decoration: none;
    }
  }
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 36px;
  color: #f1f1f1;
  margin-left: 18px;
`;

export const StyledLink = styled(RouterLink)`
  display: flex;
`;

export const Img = styled.img`
  height: 3.5em;
`;


export const LinkButton = styled.a`
  display: flex;
  border: 0;
  border-radius: 8px;
  padding: 8px;
  color: #f1f1f1;
  background: #1D6F93;
  font-weight: 600;

  text-decoration: none;

  &:hover {
    text-decoration: none;
    background: ${() => tint(0.2, '#1D6F93')};
  }

  svg {
    margin-right: 6px;
  }
`;
