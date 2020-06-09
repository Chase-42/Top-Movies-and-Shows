import React from 'react';
import { render, cleanup } from '@testing-library/react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../assets/Footer';

describe('<Home /> component', () => {
  test('Renders without crashing', () => {
    const container = rtl.render;
    render(
      <Router>
        <Footer />
      </Router>
    );
    expect(container).toBeTruthy();
  });
});

afterEach(cleanup);
