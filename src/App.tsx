import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import CustomersPage from './components/CustomersPage/CustomersPage';
import ForHer from './components/ForHer/ForHer';
import ForHim from './components/ForHim/ForHim';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/forHim' element={<ForHim/>}/>
        <Route path='/forHer' element={<ForHer/>}/>
        <Route path='/customer' element={<CustomersPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// Mind the shape not the color
// Hover over the item you like to check it in color