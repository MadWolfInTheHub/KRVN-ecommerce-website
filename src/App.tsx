import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './components/AboutPage/About';
import ChosenItem from './components/ChosenItemPage/ChosenItem';
import CustomersPage from './components/CustomersPage/CustomersPage';
import Footer from './components/Footer/Footer';
import Home from './components/HomePage/Home';
import Navigation from './components/Navigation/Navigation';
import ShoppingCart from './components/ShoppingCartPage/ShoppingCart';
import ShowRoom from './components/ShowRoomPage/ShowRoom';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/forHim' element={<ShowRoom/>}/>
        <Route path='/forHim/:itemId' element={<ChosenItem/>}/>
        <Route path='/forHer' element={<ShowRoom/>}/>
        <Route path='/forHer/:itemId' element={<ChosenItem/>}/>
        <Route path='/customer' element={<CustomersPage/>}/>
        <Route path='/cart' element={<ShoppingCart/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;


// Mind the shape not the color
// Hover over the item you like to check it in color