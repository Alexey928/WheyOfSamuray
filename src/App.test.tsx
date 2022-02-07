import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {store} from "./State/Store";


test('renders learn react link', () => {
  render(<App data ={store.State} addPost = {store.addPosts} changePost = {store.changePost}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
