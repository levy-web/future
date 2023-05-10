import './App.css';
import '../Style.css'
import { Provider } from 'react-redux';
import store, {persistor} from '../redux/Store';
import { PersistGate } from 'redux-persist/integration/react';
import Navbar from '../Navbar';
import SideNav from '../SideNav';
import Menu from '../Menu';
import Backdrop from '../Backdrop';
import { useState } from 'react';
import Product from '../products/Product';
import {Routes, Route} from 'react-router-dom'
import Prod from '../products/Prod';
import ProdCategory from '../products/ProdCategory';
import Footer from '../Footer';
import ProductByProtectedArea from '../products/ProductByProtectedArea';
import AddProd from '../admin/AddProd';
import Admin from '../admin/Admin';
import Prodact from '../admin/Product';
import AddProductColor from '../admin/AddProductColor';
import BackDropColor from '../admin/BackDropColor';

function App() {
  const  [sideMenu , setSideMenu] = useState(false)
  const [popupColor, setPopupColor] = useState(false)

  const togglePopupColor = () =>{
      setPopupColor((prevState) => !prevState)
  }
  
  const toggleSideMenu = () =>{
    setSideMenu((prevState) => !prevState)
  }
  console.log(sideMenu)
  return (
    <Provider store={store}>

      <Navbar openSideMenu={toggleSideMenu}/>      

      <Routes>    
        <Route path='/' element={<Product/>}/>
        <Route path='/category/:protectedArea/:category/product/:id' element={<Prod/>}/>
        <Route path='/category/:protectedArea/:category' element={<ProdCategory/>}/>
        <Route path='/category/:protectedArea' element={<ProductByProtectedArea/>}/>
        <Route path='/admin/:add' element={<Admin/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/admin/product/:id' element={<Prodact popColor={togglePopupColor}/>}/>
      </Routes>

      <BackDropColor popupColor={popupColor} popColor={togglePopupColor}/>      
      <Backdrop sideMenu={sideMenu} closeSideMenu={toggleSideMenu}/>
      <Menu sideMenu={sideMenu}/>
      <AddProductColor popupColor={popupColor}/>
    
    </Provider>


  );
}

export default App;
