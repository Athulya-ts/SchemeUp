import React from 'react';
import Navbar from './Components/Navbar';
import './Mainpage.css';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import RPF from './RPF';
import Pragati from './Pragati';
import MeritCum from './Meritcum';
import Natschemes from './Natschemes';
import Fishermen from './Fishermen';
import Disability from './Disability';
import NCS from './NCS';
import PMJJBY from './PMJJBY';
import CSSS from './CSSS';
import Logout from './Components/Logout';
import EditDetails from './EditDetails';
import Home from './Components/Home';

function Mainpage() {
  return (
    <BrowserRouter >
    <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/Natschemes' element={<Natschemes/>} />
        <Route path='/Pragati' element={<Pragati/>}/>
        <Route path='/MeritCum' element={<MeritCum/>}/>
        <Route path='/RPF' element={<RPF/>}/>
        <Route path='/Fishermen' element={<Fishermen/>}/>
        <Route path='/RPF' element={<RPF/>}/>
        <Route path='/CSSS' element={<CSSS/>}/>
        <Route path='/Disability' element={<Disability/>}/>
        <Route path='/EditDetails' element={<EditDetails/>}/>
        <Route path='/NCS' element={<NCS/>}/>
        <Route path='/PMJJBY' element={<PMJJBY/>}/>
        <Route path='/Logout' element={<Logout/>} />
        </Routes>
    </BrowserRouter>
  );
}
export default Mainpage;
