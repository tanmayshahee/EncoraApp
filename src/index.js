import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import { createStore } from 'redux'
import addEditNotes from './reducers/addEditNotes';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/index.css';

const store = createStore(addEditNotes);
ReactDOM.render( <Root store={store}/>, document.getElementById('root') );