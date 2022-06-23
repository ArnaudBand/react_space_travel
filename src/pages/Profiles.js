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
        <h2 className="title_rockets">My Rockets</h2>
        <div className="rocket_profile">
          {rocketReserved.map((rocket) => <p key={rocket.id}>{rocket.name}</p>)}
        </div>

        <div className="missionsDisplay">
          <h2 className="title_missions">My Joined Missions</h2>
          <div className="mission_profile">
            {!joinedMissions.length ? (
              <h3 className="NoReservedRockets">No mission joined</h3>
            ) : (
              joinedMissions.map((joinedOne) => (
                <h3 key={joinedOne.mission_id}>{joinedOne.mission_name}</h3>

              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
