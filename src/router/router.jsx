import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage } from '../components/pages/homepage/homepage.jsx';

export const Router = () => {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} /> 
      </Routes>
    </BrowserRouter>
  );
};
