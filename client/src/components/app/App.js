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
import Prodact from '../admin/Prodact';
import AddProductColor from '../admin/AddProductColor';
import BackDropColor from '../admin/BackDropColor';
import AddFeatures from '../admin/AddFeatures';
import BackDropFeature from '../admin/BackDropFeature';
import Login from '../auth/Login';
import Register from '../auth/Register';
import ProtectedRoute from '../auth/ProtectedRoute';
import AdminRoutes from '../auth/AdminRoutes';
import Cart from '../Cart';
import {Toaster} from 'react-hot-toast';
import WhatsAppButton from '../Whatsapp';
import WishList from '../products/WishList';

function App() {
  const  [sideMenu , setSideMenu] = useState(false)
  const [popupColor, setPopupColor] = useState(false)
  const [popupFeature, setPopupFeature] = useState(false)
  

  const togglePopupColor = () =>{
      setPopupColor((prevState) => !prevState)
  }

  const togglePopupFeature = () =>{
    setPopupFeature((prevState) => !prevState)
  }
  
  const toggleSideMenu = () =>{
    setSideMenu((prevState) => !prevState)
  }
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
      <Toaster position="top-center" reverseOrder={false}/>

      <Navbar openSideMenu={toggleSideMenu}/>
      <SideNav openSideMenu={toggleSideMenu}/>

      <Routes>    
        <Route path='/' element={<Product sideMenu={sideMenu}/>}/>
        <Route path='/category/:protectedArea/:category/product/:id' element={<Prod/>}/>
        <Route path='/category/:protectedArea/:category' element={<ProdCategory/>}/>
        <Route path='/category/:protectedArea' element={<ProductByProtectedArea/>}/>
        <Route path='/admin/:add' element={<ProtectedRoute><AdminRoutes><Admin/></AdminRoutes></ProtectedRoute>}/>
        <Route path='/admin' element={<ProtectedRoute><AdminRoutes><Admin/></AdminRoutes></ProtectedRoute>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

        <Route path='/wishlist' element={<WishList/>}/>
        <Route path='/admin/product/:id' element={<ProtectedRoute><AdminRoutes><Prodact popFeature={togglePopupFeature} popColor={togglePopupColor}/></AdminRoutes></ProtectedRoute>}/>
      </Routes>
      <WhatsAppButton/>

      <BackDropColor popupColor={popupColor} popColor={togglePopupColor}/>
      <BackDropFeature popFeature={togglePopupFeature} popupFeature={popupFeature}/>
      <Backdrop sideMenu={sideMenu} closeSideMenu={toggleSideMenu}/>
      <Menu closeSideMenu={toggleSideMenu} sideMenu={sideMenu}/>
      <AddProductColor popColor={togglePopupColor} popupColor={popupColor}/>
      <AddFeatures popFeature={togglePopupFeature} popupFeature={popupFeature}/>

      </PersistGate>    
    </Provider>


  );
}

export default App;
