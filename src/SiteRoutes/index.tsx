import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import Home from '../Pages/Home';

const SiteRoutes: React.FC = () => (
  <Switch>
    <Route path="/" element={<Home />} />
    <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <h1>There's nothing here!</h1>
        </main>
      }
    />
  </Switch>
);

export default SiteRoutes;
