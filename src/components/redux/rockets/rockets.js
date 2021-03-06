import getDataRockets from '../../../dataApi/rocketsApi';

// // Action-types
const GETROCKETS = 'GETROCKETS';
const RESERVED = 'RESERVED';
const CANCEL = 'CANCEL';

// Action-creator.
export const getRocktes = () => async (dispatch) => {
  const data = await getDataRockets();
  dispatch({ type: GETROCKETS, payload: data });
};

export const reserveRocket = (id) => ({
  type: RESERVED,
  id,
});

export const cancelReservation = (id) => ({
  type: CANCEL,
  id,
});

const initialState = [];

// Returns the initial state of the reducer.
const reducerRockets = (state = initialState, action = {}) => {
  switch (action.type) {
    case GETROCKETS:
      return action.payload;
    case RESERVED:
      return state.map((rocket) => {
        if (rocket.id !== action.id) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
    case CANCEL:
      return state.map((rocket) => {
        if (rocket.id !== action.id) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      });
    default:
      return state;
  }
};

export default reducerRockets;
