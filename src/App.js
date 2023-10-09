import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from './components/Layout/Header';
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
      <Header />
      <Routes>
        <Route path="/" element={<Provinces />} />
        <Route path="/districts" element={<Districts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
