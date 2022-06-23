import MissionsPage from './pages/MissionsPage';
import RocketsPage from './pages/rockets';
import Profile from './pages/Profiles';

const routes = [
  {
    id: 0,
    path: '/',
    title: 'Rockets',
    element: <RocketsPage />,
  },
  {
    id: 1,
    path: '/missions',
    title: 'Missions',
    element: <MissionsPage />,
  },
  {
    id: 2,
    path: '/profile',
    title: 'MyProfile',
    element: <Profile />,
  },
];

export default routes;
