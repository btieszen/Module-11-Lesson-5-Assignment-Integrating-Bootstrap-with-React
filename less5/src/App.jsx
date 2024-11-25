import { Routes, Route } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';

import './AppStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Shop from './Components/shop';
import Button1 from './Button1';
import Cards from './Components/Cards';
import Image1 from './Components/Image1';


function App() {
  return (
    <div className='app-container bg-info'>
    
      <NavigationBar/>
      <Home/>
      <Button1/>
      <Cards/>
      <Image1/>
      


      <Routes>
      <Route path = 'home' element ={<Home/>}/>
      <Route path ='/shop/' element ={<Shop/>}/>
       

      </Routes>
  </div>
  );
};

export default App;

