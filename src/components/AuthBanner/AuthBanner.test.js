import React from 'react';
import ReactDOM from 'react-dom';
import AuthBanner from './AuthBanner';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AuthBanner />, div);
    ReactDOM.unmountComponentAtNode(div);
});