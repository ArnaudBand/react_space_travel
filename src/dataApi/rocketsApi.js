const API_ROCKETS = 'https://api.spacexdata.com/v3/rockets';

const getDataRockets = async () => {
  const res = await fetch(API_ROCKETS);
  const response = await res.json();
  const rockets = response.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    description: rocket.description,
    image: rocket.flickr_images[0],
    reserved: false,
  }));
  return rockets;
};

export default getDataRockets;
