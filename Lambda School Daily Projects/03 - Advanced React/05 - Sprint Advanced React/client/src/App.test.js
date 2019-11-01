import React from 'react';
import * as rtl from "@testing-library/react";
import App from './App';

const {render} = rtl
test('renders without crashing', () => {
  render(<App />);
});

test('there is btn', ()=>{
  const {getByText} = render(<App />)
  getByText(/loading/i)
})

test('i hate this',()=>{
  const {getByText} = render(<App />)
  getByText(/^loading...$/i)
})
