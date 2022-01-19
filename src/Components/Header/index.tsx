import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { Container, Img, LinkButton, StyledLink, Title } from './styles';
import Menu from '../Menu';
import DropdownMenu from '../DropdownMenu';
import logoImg from '../../assets/logo.png';

const Header: React.FC = () => {
  return (
    <Container>
      <figure>
        <StyledLink to="/">
          <Img src={logoImg} />
          <Title className="hide-sm-down">Librarian</Title>
        </StyledLink>
      </figure>
      <DropdownMenu />
      <Menu cssClass="hide-sm-down" />
      <div className="hide-sm-down">
        <LinkButton
          target="_blank"
          rel="noreferrer"
          href="https://github.com/librarian-org/librarian/releases"
        >
          <FiDownload size={20} />
          Download
        </LinkButton>
      </div>
    </Container>
  );
};

export default Header;
