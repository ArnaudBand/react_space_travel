import React from 'react';
import { useSelector } from 'react-redux';
import './MyProfile.css';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets);
  const { missions } = useSelector((state) => state.missions) || [];
  const rocketReserved = rockets.filter((rocket) => rocket.reserved);
  const joinedMissions = missions.filter((mission) => mission.joined);

  return (
    <>
      <div className="myProfileDisplays">
        <div className="reservationDisplay">
          <h1>My Rockets</h1>
          {rocketReserved.map((rocket) => <p key={rocket.id}>{rocket.name}</p>)}
        </div>

        <div className="missionsDisplay">
          <h2>My Joined Missions</h2>
          {!joinedMissions.length ? (
            <h3 className="NoReservedRockets">No mission joined</h3>
          ) : (
            joinedMissions.map((joinedOne) => (
              <h3 key={joinedOne.mission_id}>{joinedOne.mission_name}</h3>

            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
