import React, { useEffect, useState } from "react";
import axios from 'axios';
import MenuCont from "./Menu/MenuCont";
import './Menubar.css';
import { useNavigate } from "react-router-dom";
import data from '../../Data/categories.json'

function MenuBar() {
    const [menu, setMenu] = useState([]);
    const navigate = useNavigate();

    const getMenu = async () => {
        try {
            const res = await axios('https://fakestoreapi.com/products/categories');
            setMenu(res.data);
            console.log(res);
        } catch (error) {
            console.error("Error fetching menu data:", error);
        }
    };

    const handleMenuClick = (category) => {
        navigate(`/SingleSection/${category}`);
        console.log(category);
    };

    useEffect(() => {
        getMenu();
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-6 col-sm-6">
                    <div className="main-menu">
                        {menu.map((category) => (
                            <MenuCont data={category} onClick={() => handleMenuClick(category)} key={category} />
                        ))}
                        {/* {data.map((dat)=> <MenuCont data={dat} key={dat.id}/>)} */}
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuBar;
