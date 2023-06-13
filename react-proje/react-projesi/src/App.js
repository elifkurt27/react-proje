import {BrowserRouter as Router, Route, Routes, Link, Outlet, Navigate} from 'react-router-dom';
import Login from './Login.js';
import Register from './Register.js';
import Portal from './Portal.js';

import BasvuruFormu from "./component/BasvuruFormu";
import BasvuruGoruntule from "./component/BasvuruGoruntule";
import SifreDegistir from './component/SifreDeğistir.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/kayit" element={<Register />} />
        <Route path="/portal" element={<Portal />} />
        <Route path="/portal/BasvuruFormu" element={<BasvuruFormu/>} />
        <Route path="/portal/BasvuruGoruntule" element={<BasvuruGoruntule/>} />
        <Route path="/SifreDegistir" element={<SifreDegistir/>} />

      </Routes>
    </Router>

  );
}

export default App;
