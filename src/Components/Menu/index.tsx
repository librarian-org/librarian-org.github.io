import React from 'react';
import { StyledLink } from '../Header/styles';

import { Container } from './styles';

interface MenuProps {
  cssClass: string;
}

const Menu: React.FC<MenuProps> = ({ cssClass }) => {
  return (
    <Container className={cssClass}>
      <StyledLink to="about">About</StyledLink>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://librarian-org.gitbook.io/librarian/"
      >
        Docs
      </a>
      <a target="_blank" rel="noreferrer" href="https://dev.to/librarian-org">
        Blog
      </a>
    </Container>
  );
};

export default Menu;
