import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Provinces from './components/Provinces';
import Districts from './components/Districts';

function App() {
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
