import React, { useEffect } from 'react'
import dummy from '../../../Media/0002.jpg'
import './Single.css'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Single() {

 
 // const getData = () => {
    //     axios('https://restcountries.com/v3.1/all')
    //         .then((res) => {
    //             setAll(res.data)
    //         }).catch((err) => {
    //             console.log(err);
    //         });
    // }


//  const getSingleData = async() =>{
//     try{
//         const re = await axios(`https://fakestoreapi.com/products/${id}`)
//         setData(re)
//         console.log(re);
//     }catch(err) {
//         console.log(err);
//     }
//  }

const [data, setData] = useState(null);
  const { id } = useParams();

  const getSingleData = async () => {
    try {
      const response = await axios(`https://fakestoreapi.com/products/${id}`);
      setData(response.data);
    } catch (err) {
      console.error('Error fetching product data:', err);
      // Handle error here (e.g., display error message)
    }
  };

  useEffect(() => {
    getSingleData();
  }, [id]); // Dependency on 'id' ensures refetch on change

  return (
    <div>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 d-flex border p-5 rounded-5 image-box">
          {data ? (<img src={data.image} alt={data.title} /> ) : ( <p>Loading product...</p>)}
        </div>
        <div className="col-lg-6 p-5">
          <h1>{data?.title}</h1>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Single
