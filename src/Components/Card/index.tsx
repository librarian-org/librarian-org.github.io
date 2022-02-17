import React from 'react';
import { FiGithub } from 'react-icons/fi';

import { Container, Strong } from './styles';

const Card: React.FC = () => {
  return (
    <Container>
      <article>
        <h2>
          <span>Librarian Org</span> mission
        </h2>

        <p>
          Our mission is help to improve technology accessibility by providing a
          free and open management software that is full-featured and easy to
          use.
        </p>

        <Strong>Our commitments to you:</Strong>

        <ul>
          <li>
            <strong>Always Open and Free</strong>: Core features are always open
            source and free with MIT license.
          </li>
          <li>
            <strong>Totally Private</strong>: We will never track you or sell
            your data. We don't even know when you install the app, it's none of
            our business.
          </li>
          <li>
            <strong>Works Offline</strong>: You will never need an internet
            connection to use the app (why should you?)
          </li>
          <li>
            <strong>Inclusive Community</strong>: We are 100% inclusive and have
            a&nbsp;
            <a href="https://github.com/librarian-org/librarian/blob/main/.github/CODE_OF_CONDUCT.md">
              code of conduct
            </a>
            . Diversity and inclusivity are good for Librarian Org, the tech
            community, and the world.
          </li>
        </ul>

        <a href="https://github.com/librarian-org" target="_blank">
          <FiGithub size={20} /> <strong>View source on Github</strong>
        </a>
      </article>
    </Container>
  );
};

export default Card;
