import { Routes, Route } from 'react-router-dom';
import DelitosPage from '../Pages/DelitosPage';
import MapPage from '../Pages/MapPage';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<MapPage />} />
    <Route path="/delitos" element={<DelitosPage />} />
  </Routes>
);

export default AppRouter;