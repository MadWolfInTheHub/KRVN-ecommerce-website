import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import ChosenItem from './components/ChosenItem/ChosenItem';
import CustomersPage from './components/CustomersPage/CustomersPage';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import ShowRoom from './components/ShowRoom/ShowRoom';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// Mind the shape not the color
// Hover over the item you like to check it in color