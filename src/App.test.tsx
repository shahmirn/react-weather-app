import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';

test('should render the app', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByTestId(/topnav/)).toBeInTheDocument();
  expect(getByTestId(/location-search/)).toBeInTheDocument();
  expect(getByTestId(/weather/)).toBeInTheDocument();
});
