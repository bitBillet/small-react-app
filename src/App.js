import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import Main from './smart/main'
import Info from './smart/aboutMovie'
import { Route, Switch } from "react-router-dom"

function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/about/:number' component={Info} />
      </Switch>
    </Provider>
  );
}

export default App;
