import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./CardLayout.css";
import Counter from "../../extras/counterButton/Counter";
import { useNavigate } from "react-router-dom";

function CardLayout({ data }) { 
  let strTitle = data.title;
  let titlechk = strTitle.slice(0, 16);

  let strDesc = data.description;
  let descchk = strDesc.slice(0, 75);
  
  const navigate = useNavigate();
  const goSingle = ()=>{
    navigate(`/Single/${data.id}`)
  }

  return (
    <>
      <div className="col-3">
        <Card style={{ width: "18rem" }} >
          <Card.Img className="img-size curoser" variant="top" src={data.image} onClick={goSingle} />
          <Card.Body>
            <Card.Title className="curoser" onClick={goSingle}>{titlechk}</Card.Title>
            <Card.Text className="curoser" onClick={goSingle}>{descchk}</Card.Text>
            <Card.Title className="price-css text-danger">
              {data.price + " USD"}{" "}
            </Card.Title>

            <div className="row">
              <form action="">
                <div className="d-flex">
                  <Button variant="primary btn-sm">Add</Button>
                  <Counter></Counter>
                </div>
              </form>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default CardLayout;
