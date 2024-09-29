import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CardLayout from '../CardLayout';

function WomansClothing() {

    const [womansClothing, setWomansClothing] = useState([]);

    const getWomansClothing = async()=>{
        const req = await axios(`https://fakestoreapi.com/products/category/women's%20clothing?limit=4`)
        console.log(req);
        setWomansClothing(req.data);
    }
    useEffect(()=>{
        getWomansClothing();
    },[])

  return (
    <>
    <div className="container  mt-5">
                <div>
                    <h3>Women's Clothing</h3>
                </div>
                <div className="row">
                <div className="col-4 d-flex">
                    <div className='d-flex gap-3'>
                    {womansClothing.map((item) => <CardLayout data={item} key={item} />)}
                    </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default WomansClothing
