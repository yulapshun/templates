import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

const store = createStore(
  reducers,
  {}
);

export default function(props) {
  return (
    <Provider store={store}>
      <div>template</div>
    </Provider>
  );
}
