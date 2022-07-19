import { Routes, Route } from 'react-router-dom';
import DelitosPage from '../Pages/DelitosPage';
import DenunciaPage from '../Pages/DenunciaPage';
import MapPage from '../Pages/MapPage';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<MapPage />} />
    <Route path="/delitos" element={<DelitosPage />} />
    <Route path="/denuncia" element={<DenunciaPage />} />
  </Routes>
);

export default AppRouter;