import React, { useEffect } from "react";
import dummy from "../../../Media/0002.jpg";
import "./Single.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Counter from "../counterButton/Counter";

function Single() {
  // const getData = () => {
  //     axios('https://restcountries.com/v3.1/all')
  //         .then((res) => {
  //             setAll(res.data)
  //         }).catch((err) => {
  //             console.log(err);
  //         });
  // }

  const [data, setData] = useState(null);
  const { id } = useParams();

  const getSingleData = async () => {
    try {
      const response = await axios(`https://fakestoreapi.com/products/${id}`);
      setData(response.data);
    } catch (err) {
      console.error("Error fetching product data:", err);
    }
  };

  useEffect(() => {
    getSingleData();
  }, [id]);

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 d-flex border p-5 rounded-5 image-box">
            {/* {data ? (<img src={data.image} alt={data.title} /> ) : ( <p>Loading product...</p>)} */}
            {<img src={data?.image} alt={data?.title} />}
          </div>
          <div className="col-lg-6 p-5">
            <h5>{data?.title}</h5>

            <h3 className="mt-2 text-danger">{data?.price + "  USD"}</h3>
            <form action="">
            <div className="d-flex align-content-center qty">
              <h5>Quantity : </h5>
              <Counter />
            </div>
            <div class="d-grid col-6 mt-3">
              <button class="btn btn-primary" type="button">Add</button>
            </div>
            </form>
            <div className="mt-3">
              <h6>Description</h6>
              <p>{data?.description}</p>
            </div>
            <div>
              <h6>Rating : {data?.rating?.rate}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Single;
