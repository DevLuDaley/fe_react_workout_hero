import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import ShallowRenderer from 'react-test-renderer/shallow';
import Header from '../src/components/Header'

const mockStore = configureMockStore();
const store = mockStore({});

const renderer = new ShallowRenderer();
renderer.render(<App />);
const result = renderer.getRenderOutput();

test('renders header link', () => {
  render(
  //  <Provider store={store}>
  <div>
  {/* {result} */}
  

  <Header />
  </div>
  //  </Provider>
  
  );
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
