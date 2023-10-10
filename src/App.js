import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Provinces from './components/Provinces';
import Districts from './components/Districts';
import { fetchLocations } from './redux/features/location/locationSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLocations());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Provinces />} />
        <Route path="/districts/:region" element={<Districts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
