import React from 'react';
import { render, cleanup } from '@testing-library/react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

describe('<App /> component', () => {
  test('Renders without crashing', () => {
    const container = rtl.render(<App />);
  });
});

afterEach(cleanup);
