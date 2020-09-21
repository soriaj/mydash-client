import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SideNav from './SideNav';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><SideNav /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
});