import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import FirstCounter from './components/FirstCounter';
import SecondCounter from './components/SecondCounter';
import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Main />
        </div>
      </Provider>
    );
  }
}

export default App;
