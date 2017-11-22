import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import reducers from './reducers';

const store = createStore( reducers, {}, applyMiddleware(reduxThunk));

const NotFound = () => <h2>NoteFound</h2>

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route  path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#root'));
