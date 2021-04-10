import React from 'react';
import { render } from '@testing-library/react';
import { Topnav } from './Topnav';

test('should render the app', () => {
  const { getByText } = render(
    <Topnav title='Test Title'></Topnav>
  );

  expect(getByText(/Test Title/)).toBeInTheDocument();
});
