import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './features/about/components/About';
import ChosenItem from './features/item/components/ChosenItem';
import CustomersPage from './features/customer/components/CustomersPage';
import Footer from './features/footer/components/Footer';
import Home from './features/home/components/Home';
import Navigation from './features/navigation/components/Navigation';
import ShoppingCart from './features/cart/components/ShoppingCart';
import ShowRoom from './features/products/components/ShowRoom';

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