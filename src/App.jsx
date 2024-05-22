import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Dest from './Components/Destination';
import Login from './Components/Login';
import FormInner from './Components/BookNowForm';
import Card from './Components/Experience';
import Festival from './Components/Festival';
import About from './Components/About'

// experiences
import ArtPage from './Components/Art';
import NaturePage from './Components/Nature';
import SpiritualPage from './Components/Spiritual';
import FoodPage from './Components/Food';
import HeritagePage from './Components/heritage';
import AdventurePage from './Components/adventure';
import CraftedPage from './Components/crafted';
import LuxuryPage from './Components/luxury';
import MuseumPage from './Components/museum';
import UnescoPage from './Components/unesco';
import ShoppingPage from './Components/shopping';
import YogaPage from './Components/yoga';



// dest
import ChandigarhPage from './Components/n_chandigarh';
import AruPage from './Components/N_AruPradesh';
import DelhiPage from './Components/Delhi';
import AssamPage from './Components/Assam';
import AndhraPage from './Components/AndhraPradesh';
import ManipurPage from './Components/manipur';
import TamilnaduPage from './Components/TamilNadu';
import PuducherryPage from './Components/Puducherry';
import LakshadweepPage from './Components/Lakshadweep';
import KeralaPage from './Components/Kerala';
import KarnatakaPage from './Components/Karnataka';
import TelanganaPage from './Components/Telangana';
import ChattisgarhPage from './Components/Chattisgarh';
import MadhyapradeshPage from './Components/MP';
import HaryanaPage from './Components/Haryana';
import HimachalPage from './Components/Himachal';
import MeghalayaPage from './Components/Meghalaya';
import AndmanPage from './Components/andaman';
import BiharPage from './Components/Bihar';
import JammuPage from './Components/JK';
import DadraPage from './Components/Dadra';








// festivals
// import Diwali from './Components/Diwali';



const App = () => {
  return (
    <Router>
      <div>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='festival' element={<Festival />} />
          <Route path="/destination" element={<Dest />} />
          <Route path="/experiences" element={<Card />} />
          <Route path="/book-now" element={<FormInner />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />



          <Route path="/art" element={<ArtPage />} />
          <Route path="/nature" element={<NaturePage />} />
          <Route path="/spiritual" element={<SpiritualPage />} />
          <Route path="/food" element={<FoodPage />} />
          <Route path="/heritage" element={<HeritagePage />} />
          <Route path="/adventure" element={<AdventurePage />} />
          <Route path="/crafted" element={<CraftedPage />} />
          <Route path="/luxury" element={<LuxuryPage />} />
          <Route path='/museum' element={<MuseumPage/>} />
          <Route path='/unesco' element={<UnescoPage/>} />
          <Route path='/shopping' element={<ShoppingPage/>} />
          <Route path='/yoga' element={<YogaPage/>} />









          


          <Route  path="/chandigarh" element={<ChandigarhPage/>} />
          <Route path='/N_AruPradesh' element={<AruPage/>} />
          <Route path='/Delhi' element={<DelhiPage/>} />
          <Route path='/Assam' element={<AssamPage/>} />
          <Route path='/AndhraPradesh' element={<AndhraPage/>} />
          <Route path='/Manipur' element={<ManipurPage/>} />
          <Route path='/TamilNadu' element={<TamilnaduPage/>} />
          <Route path='/Puducherry' element={<PuducherryPage/>} />
          <Route path='/lakshadweep' element={<LakshadweepPage/>} />
          <Route path='/kerala' element={<KeralaPage/>} />
          <Route path='/karnataka' element={<KarnatakaPage/>} />
          <Route path='/telangana' element={<TelanganaPage/>} />
          <Route path='/Chattisgarh' element={<ChattisgarhPage/>} />
          <Route path='/MP' element={<MadhyapradeshPage/>} />
          <Route path='/Haryana' element={<HaryanaPage/>} />
          <Route path='/Himachal' element={<HimachalPage/>} />
          <Route path='/Meghalaya' element={<MeghalayaPage/>} />
          <Route path='/Andaman' element={<AndmanPage/>} />
          <Route path='/Bihar' element={<BiharPage/>} />
          <Route path='/JK' element={<JammuPage/>} />
          <Route path='/Dadra' element={<DadraPage/>} />
          




        
      
        </Routes>
      </div>
    </Router>
  );
}

export default App;
