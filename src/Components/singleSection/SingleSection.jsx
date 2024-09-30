import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleSection() {
  const [menu, setMenu] = useState([]);
  const { cat } = useParams();

  const getMenu = async () => {
    try {
      const res = await axios(`https://fakestoreapi.com/products/${cat}`);
      setMenu(res.data);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getMenu();
    console.log(menu);
    
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
                        
        </div>
      </div>
    </>
  );
}

export default SingleSection;
