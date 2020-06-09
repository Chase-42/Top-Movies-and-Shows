import React from 'react';
import { render, cleanup } from '@testing-library/react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '.././assets/Header';

describe('<Header /> component', () => {
  test('Render without crashing', () => {
    const container = rtl.render;
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(container).toBeTruthy();
  });
});

afterEach(cleanup);
