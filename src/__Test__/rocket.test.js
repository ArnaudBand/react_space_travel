import reducerRockets from '../components/redux/rockets/rockets';

describe('Test the rocket reducers', () => {
  const GETROCKETS = 'GETROCKETS';
  const RESERVED = 'RESERVED';
  const CANCEL = 'CANCEL';

  const initialData = {
    id: 1,
    name: 'Falcon 1',
    description:
            'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
    image: 'https://imgur.com/DaCfMsj.jpg',
    reserved: false,
  };

  it('When there is neither an state nor an action, the default reducer should return the empty initial state (an empty array).', () => {
    expect(reducerRockets(undefined, {})).toEqual([]);
  });

  it('When dispatch action GETROCKET, the reducer should update the empty initial state in the API.', () => {
    const initialState = [];
    const data = [initialData];
    const action = { type: GETROCKETS, payload: data };

    expect(reducerRockets(initialState, action)).toEqual(data);
  });

  it('When there is a previous state and does not exist an action, the default reducer should return the previous state.', () => {
    const previousState = [initialData];
    expect(reducerRockets(previousState, {})).toEqual(previousState);
  });

  it('When dispatch action RESERVED, the reducer should add a property reserved=true to the rocket with id = 0', () => {
    const previousState = [initialData];
    const action = { type: RESERVED, id: 1 };
    const newState = [{ ...initialData, reserved: true }];
    expect(reducerRockets(previousState, action)).toEqual(newState);
  });

  it('When dispatch action CANCEL, the reducer should change the reserved property from true to false of the rocket with id = 0', () => {
    const previousState = [{ ...initialData, reserved: true }];
    const action = { type: CANCEL, id: 1 };
    const newState = [{ ...initialData, reserved: false }];

    expect(reducerRockets(previousState, action)).toEqual(newState);
  });
});
