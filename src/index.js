import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import { createStore } from 'redux'
import reducer from './reducers/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/index.css';

const store = createStore(reducer);
ReactDOM.render( <Root store={store}/>, document.getElementById('root') );