import { Route, Routes } from 'react-router-dom';
import './App.css';

import MainPage from './Page/MainPage';

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<MainPage />}>
        
        </Route>
    </Routes> 
    </>
               
  );
}

export default App;
