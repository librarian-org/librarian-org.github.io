import React from 'react';

import { Container } from './styles';

const Copyright: React.FC = () => {
  return (
    <Container>
      <h3><em>Simple and easy to use Library system</em></h3>
      <p>&copy; {new Date().getFullYear()}  Librarian Org &amp; Librarian</p>
    </Container>
  );
};

export default Copyright;
