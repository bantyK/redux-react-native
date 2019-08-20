import React from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Counter from './CounterComponent';
import { counterReducer } from './../reducers/CounterReducer';

const store = createStore(counterReducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    )
  }
};

export default App;