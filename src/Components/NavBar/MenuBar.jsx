import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
import MenuCont from "./Menu/MenuCont";
import './Menubar.css'

function MenuBar() {

    const [menu, setMenu] = useState([]);

    const getMenu = async () => {
        const res = await axios('https://fakestoreapi.com/products/categories');
        setMenu(res.data)
        console.log(res);
        
    }
useEffect(()=>{
    getMenu();
},[])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-6 col-sm-6">
            <div className="main-menu">
                {menu.map((menu)=> <MenuCont data={menu} key={menu}/> )}                
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuBar;
