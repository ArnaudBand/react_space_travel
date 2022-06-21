import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducerRockets from './rockets/rockets';

const store = configureStore({
  reducer: {
    rockets: reducerRockets,
  },
  middleware: [thunk],
});

export default store;
