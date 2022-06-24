import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducerRockets from './rockets/rockets';
import reducerMissions from './missions/missions';

const store = configureStore({
  reducer: {
    rockets: reducerRockets,
    missions: reducerMissions,
  },
  middleware: [thunk],
});

export default store;
