import getDataRockets from '../../../dataApi/rocketsApi';

// // Action-types
const GETROCKETS = 'GETROCKETS';

// Action-creator.
export const getRocktes = () => async (dispatch) => {
  const data = await getDataRockets();
  dispatch({ type: GETROCKETS, payload: data });
};

const initialState = [];

// Returns the initial state of the reducer.
const reducerRockets = (state = initialState, action = {}) => {
  switch (action.type) {
    case GETROCKETS:
      return action.payload;
    default:
      return state;
  }
};

export default reducerRockets;
