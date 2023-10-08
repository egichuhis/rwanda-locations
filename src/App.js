import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TestComponent from './components/TestComponent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<TestComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
