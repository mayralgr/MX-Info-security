import { Routes, Route } from 'react-router-dom';
import MapPage from '../Pages/MapPage';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<MapPage />} />
  </Routes>
);

export default AppRouter;