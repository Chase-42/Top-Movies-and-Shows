import React from 'react';
import { render, cleanup } from '@testing-library/react';
import * as rtl from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../assets/Home';

describe('<Home /> component', () => {
  test('Renders without crashing', () => {
    const container = rtl.render;
    render(
      <Router>
        <Home />
      </Router>
    );
    expect(container).toBeTruthy();
  });
});

afterEach(cleanup);
