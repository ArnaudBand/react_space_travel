import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Missions from '../components/Missions/Missions';
import { getMissions } from '../components/redux/missions/missions';

export default function MissionsPage() {
  const dispatch = useDispatch();
  const missionList = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(getMissions);
  }, []);

  return (
    <div className="pages-content">
      {missionList.map((mission) => (
        <Missions
          key={mission.id}
          id={mission.id}
          name={mission.name}
          description={mission.description}
        />
      ))}
    </div>
  );
}
