const API_MISSIONS = 'https://api.spacexdata.com/v3/missions';

const getDataMissions = async () => {
  const res = await fetch(API_MISSIONS);
  const response = await res.json();
  const missions = response.map((mission) => ({
    id: mission.id,
    name: mission.mission_name,
    description: mission.description,
  }));
  return missions;
};

export default getDataMissions;
