import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardLayout.css';

function CardLayout({data}) {
  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img className='img-size' variant="top" src={data.image} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
          {data.description}
        </Card.Text>
        <Card.Title className='price-css'>{data.price + ' USD'} </Card.Title>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default CardLayout