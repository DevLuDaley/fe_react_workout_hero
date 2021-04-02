import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import ShallowRenderer from 'react-test-renderer/shallow';

const mockStore = configureMockStore();
const store = mockStore({});

test('renders learn react link', () => {
  render(
   <Provider store={store}>

  <App />
   </Provider>
  
  );
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
