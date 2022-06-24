import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Rockets from '../components/Rockets/Rockets';
import { getRocktes } from '../components/redux/rockets/rockets';
import './rockets.css';

const RocketsPage = () => {
  const dispatch = useDispatch();
  const rocketList = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(getRocktes);
  }, []);

  return (
    <div>
      {rocketList.map((rocket) => (
        <Rockets
          key={rocket.id}
          id={rocket.id}
          name={rocket.name}
          description={rocket.description}
          image={rocket.image}
          reserved={rocket.reserved}
        />
      ))}
    </div>
  );
};

export default RocketsPage;
