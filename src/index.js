import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux/es/exports';
import store from './components/redux/configureStore';
import App from './App';
import { getRocktes } from './components/redux/rockets/rockets';
import { getMissions } from './components/redux/missions/missions';
import './index.css';

store.dispatch(getRocktes());
store.dispatch(getMissions());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
);
