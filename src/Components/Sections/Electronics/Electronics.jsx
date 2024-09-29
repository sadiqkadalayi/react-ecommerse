import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CardLayout from '../CardSections/CardLayout';

function Electronics() {

    const [electronics, setElectronics] = useState([]);

    const getElectronics = async () => {
        try {
            const res = await axios('https://fakestoreapi.com/products/category/electronics?limit=4');
            console.log(res);
            setElectronics(res.data)
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getElectronics();
    }, [])


    return (
        <>

            <div className="container  mt-5">
                <div>
                    <h3>Electronics</h3>
                </div>
                <div className="row">
                <div className="col-4 d-flex">
                    <div className='d-flex gap-3'>
                    {electronics.map((item) => <CardLayout data={item} key={item.id} />)}
                </div>
                </div>
                </div>
            </div>
        </>

    )
}

export default Electronics
