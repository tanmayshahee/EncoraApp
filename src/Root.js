import React from 'react'
//import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App';
import AddEditNotes from './Pages/AddEditNotes/AddEditNotes';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router basename='/EncoraApp'>
      <Route exact path="/" component={App} />
      <Route exact path="/add-edit-notes" component={AddEditNotes} />
    </Router>
  </Provider>
)

// Root.propTypes = {
//   store: PropTypes.object.isRequired
// }

export default Root