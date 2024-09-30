import React from "react";
import { Outlet } from "react-router-dom";
import HeadSection from "./NavBar/HeadSection";
import HeadSection2 from "./NavBar/HeadSection2";
import HeadLogo from "./NavBar/HeadLogo";
import MenuBar from "./NavBar/MenuBar";
import FooterMain from "./Footer/FooterMain";
import Footer from "./Footer/Footer";



function RootLayout() {
  return (
    <>
      <HeadSection /> 
      <HeadSection2 />
      <HeadLogo />
      <MenuBar />

       <Outlet/>

      <FooterMain />
      <Footer />
    </>
  );
}

export default RootLayout;
