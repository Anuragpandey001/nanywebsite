
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import TermsCond from './Pages/TermsCond';

import Privacy from './Pages/Privacy';


function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/terms' element={<TermsCond />} />
          <Route path='/privacy' element={<Privacy />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
