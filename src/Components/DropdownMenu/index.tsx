import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

import { Container, Divider, Dropdown, MenuItem, StyledLink } from './styles';

const DropdownMenu: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <FiMenu size={20} onClick={() => { setVisible(!visible) }}/>
      <Dropdown isVisible={visible}>
        <MenuItem>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/librarian-org/librarian/releases"
          >
            Download
          </a>
        </MenuItem>
        <Divider />
        <MenuItem>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://librarian-org.gitbook.io/librarian/"
          >
            Docs
          </a>
        </MenuItem>
        <MenuItem>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://dev.to/librarian-org"
          >
            Blog
          </a>
        </MenuItem>
        <MenuItem>
          <StyledLink to="about">About</StyledLink>
        </MenuItem>
      </Dropdown>
    </Container>
  );
};

export default DropdownMenu;
