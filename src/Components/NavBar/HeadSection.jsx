import React from "react";
import './HeadSection.css';

function HeadSection() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex text-center justify-content-center Head-section pt-2">
            <p>We accept orders 24 hours. !!!  Orders placed after 9.00 PM will be delivered the next day at 8 AM.  On the final day, 
                the promotion will end at 10:00 p.m. (only on the website). <br />Cash & card payments on delivery are available.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeadSection;
