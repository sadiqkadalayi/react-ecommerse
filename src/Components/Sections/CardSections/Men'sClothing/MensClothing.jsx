import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CardLayout from '../CardLayout';

function MensClothing() {

    const [mensClothing, setMensClothing]=useState([]);

    const getMensClothing = async ()=>{
        try{
            const req = await axios(`https://fakestoreapi.com/products/category/men's%20clothing?limit=4`);
            console.log(req);
            setMensClothing(req.data)
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        getMensClothing();
    },[])
  return (
    <>
          <div className="container  mt-5">
                <div>
                    <h3>Men's Clothing</h3>
                </div>
                <div className="row">
                <div className="col-4 d-flex">
                    <div className='d-flex gap-3'>
                    {mensClothing.map((item) => <CardLayout data={item} key={item} />)}
                    </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default MensClothing
