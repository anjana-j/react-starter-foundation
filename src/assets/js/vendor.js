import '../scss/common/core.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './app';

$(document).foundation();


ReactDOM.render( 
    <App />,
    document.getElementById('root')
);