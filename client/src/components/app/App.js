import './App.css';
import '../Style.css'
import Navbar from '../Navbar';
import SideNav from '../SideNav';
import Menu from '../Menu';
import Backdrop from '../Backdrop';
import { useState } from 'react';

function App() {
  const  [sideMenu , setSideMenu] = useState(false)
  const toggleSideMenu = () =>{
    setSideMenu((prevState) => !prevState)
  }
  console.log(sideMenu)
  return (
    <>
    <Navbar openSideMenu={toggleSideMenu}/>
    <SideNav/>
    <Backdrop sideMenu={sideMenu} closeSideMenu={toggleSideMenu}/>
    <Menu sideMenu={sideMenu}/>
    </>


  );
}

export default App;
