import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets);
  const rocketReserved = rockets.filter((rocket) => rocket.reserved);

  return (
    <>
      <h2 className="title_rockets">My Rockets</h2>
      <div className="rocket_profile">
        {rocketReserved.map((rocket) => <p key={rocket.id}>{rocket.name}</p>)}
      </div>

    </>
  );
};

export default Profile;
