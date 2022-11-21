import React from 'react';
import Navbar from './Components/Navbar';
import './Mainpage.css';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Home from './Components/Pages/Home';
import Camps from './Components/Pages/Camps';
import EditDetails from './Components/Pages/EditDetails';
import Natschemes from './Natschemes';
import Logout from './Components/Pages/Logout';

function Mainpage() {
  return (
    <Router>
      <Navbar />
        <Routes>
        <Route path='/Natschemes' element={<Natschemes/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/Camps' element={<Camps/>} />
        <Route path='/EditDetails' element={<EditDetails/>} />
        <Route path='/Logout' element={<Logout/>} />
        </Routes>
    </Router>
  );
}
export default Mainpage;