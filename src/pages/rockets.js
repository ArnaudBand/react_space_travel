import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Rockets from '../components/Rockets/Rockets';
import { getRocktes } from '../components/redux/rockets/rockets';

const RocketsPage = () => {
  const dispatch = useDispatch();
  const rocketList = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(getRocktes);
  }, []);

  return (
    <div className="pages-content">
      {rocketList.map((rocket) => (
        <Rockets
          key={rocket.id}
          id={rocket.id}
          name={rocket.name}
          description={rocket.description}
          image={rocket.image}
        />
      ))}
    </div>
  );
};

export default RocketsPage;
