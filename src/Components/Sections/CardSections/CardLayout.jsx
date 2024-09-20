import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardLayout.css';

function CardLayout({data}) {

  let strTitle = data.title;
  let titlechk = strTitle.slice(0,16);

  let strDesc = data.description;
  let descchk = strDesc.slice(0,75);
  return (
    <>
    <div className="col-3">
    <Card style={{ width: '18rem' }}>
      <Card.Img className='img-size' variant="top" src={data.image} />
      <Card.Body>
        <Card.Title>{titlechk}</Card.Title>
        <Card.Text>
          {descchk}
        </Card.Text>
        <Card.Title className='price-css'>{data.price + ' USD'} </Card.Title>
        <Button variant="primary">Add</Button>
      </Card.Body>
    </Card>
    
    </div>
    </>
  )
}

export default CardLayout