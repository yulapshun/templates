import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

const store = createStore(
  reducers,
  {}
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>template</div>
      </Provider>
    );
  }
}
