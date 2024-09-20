import React from "react";
import { Outlet } from "react-router-dom";
import HeadSection from "./NavBar/HeadSection";
import HeadSection2 from "./NavBar/HeadSection2";
import HeadLogo from "./NavBar/HeadLogo";
import MenuBar from "./NavBar/MenuBar";
import FooterMain from "./Footer/FooterMain";
import Footer from "./Footer/Footer";
import Jwellery from "./Sections/JwellerySection/Jwellery";
import Electronics from "./Sections/Electronics/Electronics";
import MensClothing from "./Sections/CardSections/Men'sClothing/MensClothing";
import WomansClothing from "./Sections/CardSections/WomansClothing/WomansClothing";

function RootLayout() {
  return (
    <>
      <HeadSection /> 
      <HeadSection2 />
      <HeadLogo />
      <MenuBar />
        <Jwellery/>
        <hr />
        <Electronics/>
        <hr />
        <MensClothing/>
        <hr />
        <WomansClothing/>
        <Outlet/>
        
      <FooterMain />
      <Footer />
    </>
  );
}

export default RootLayout;
