import React from 'react';

import { Container, FooterMenu, FooterRow, Section } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <FooterRow>
        <Section>
          <h3>Documentations</h3>
          <FooterMenu>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://librarian-org.gitbook.io/librarian/v/english/"
              >
                English
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://librarian-org.gitbook.io/librarian/v/portugues/"
              >
                Português (Brasil)
              </a>
            </li>
          </FooterMenu>
        </Section>
        <Section>
          <h3>Community</h3>
          <FooterMenu>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://gitub.com/librarian-org/librarian/"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/librarian-org/librarian/discussions"
              >
                GitHub discussions
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://dev.to/librarian-org"
              >
                Blog
              </a>
            </li>
          </FooterMenu>
        </Section>
      </FooterRow>
    </Container>
  );
};

export default Footer;
