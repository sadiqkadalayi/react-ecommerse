import React from 'react'
import Jwellery from './Sections/JwellerySection/Jwellery'
import Electronics from './Sections/Electronics/Electronics'
import MensClothing from './Sections/CardSections/Men\'sClothing/MensClothing'
import WomansClothing from './Sections/CardSections/WomansClothing/WomansClothing'
import Carousal from './carousal/Carousal'
import SingleSection from './singleSection/SingleSection'


function Main() {
  return (
    <div>
      <SingleSection/>
      <Carousal/>
       <Jwellery/>
        <hr />
        <Electronics/> 
        <hr />
        <MensClothing/>
        <hr />
        <WomansClothing/>
    </div>
  )
}

export default Main
