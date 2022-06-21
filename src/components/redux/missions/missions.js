import getDataMissions from '../../../dataApi/missionsApi';

const GETMISSIONS = 'SPACETRAVELER/redux/missions';

export const getMissions = () => async (dispatch) => {
  const data = await getDataMissions();
  dispatch({ type: GETMISSIONS, payload: data });
};

const initialState = [];

const reducerMissions = (state = initialState, action = {}) => {
  switch (action.type) {
    case GETMISSIONS:
      return action.payload;
    default:
      return state;
  }
};

export default reducerMissions;
