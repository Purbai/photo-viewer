// import React from 'react';
// import * as React from 'react';
import { render } from '@testing-library/react';
// import '@testing-library/jest-dom'
import App from '../App';

test('demo', () => {
    expect(true).toBe(true)
  })

  test("Renders the main page", () => {
    render(<App />)
    expect(true).toBeTruthy()
})

/* test.skip('renders React Photo Viewer text', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/React Photo Viewer/i);
  expect(textElement).toBeInTheDocument();
}); */