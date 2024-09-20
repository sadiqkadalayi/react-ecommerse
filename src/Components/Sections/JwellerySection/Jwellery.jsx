import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CardLayout from '../CardSections/CardLayout';



function Jwellery() {

    const [jwelley ,setJwellery] = useState([]);

    const getJwellry = async ()=> {
        try{
        const res = await axios('https://fakestoreapi.com/products/category/jewelery');
        setJwellery(res.data)
        console.log(res);
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        getJwellry();
    },[])


  return (
    <>
    <div className="container  mt-5">
        <div className="row">
        <div>
                <h3>Jewelery</h3>
            </div>
            <div className="col-4 d-flex">
                <div className='d-flex gap-3'>
                        {jwelley.map((item)=><CardLayout data={item} key={item}/>)}  
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Jwellery