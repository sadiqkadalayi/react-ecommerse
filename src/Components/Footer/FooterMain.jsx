import React from "react";
import "./FooterMain.css";

function FooterMain() {
  return (
    <>
    <div className="container-fluid bg-success text-white con-fl-bg mt-5" >
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 pt-4">
            <div>
              <h5 className="pb-4">E-Commerse Application</h5>
              <div className="d-flex f-main-a">
                <i className="fa fa-map-marker"></i>
                <p>Khaleej Street. Near Jaidah Flyover. Mushaireb. DOHA</p>
              </div>
              <div className="d-flex align-middle f-main-n">
                <i className="fa fa-phone"></i>
                <p>Call us at 4444 1099 & 3158 7322</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 pt-4">
            <div className="f-main-navigate">
              <ul>
                <li className="mb-2"><strong>Navigate</strong></li>
                <li>Feedback</li>
                <li>Shipping</li>
                <li>Contact Us</li>
                <li>Our Location</li>
                <li>Reviews</li>
                <li>Weekend Flyer</li>
                <li>Sitemap</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 pt-4">
          <div className="f-main-navigate">
              <ul>
                <li className="mb-2"><strong>Categories</strong></li>
                <li>Special Promotions</li>
                <li>Fresh Fruits & Vegetables</li>
                <li>Fresh Fish-Meat-Chicken</li>
                <li>Dairy Products</li>
                <li>Cold beverages</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 pt-4">
          <div className="f-main-navigate">
              <ul>
                <li className="mb-2"><strong>Popular Brands</strong></li>
                <li>Baladna</li>
                <li>Dove</li>
                <li>Eastern</li>
                <li>Fresh Fish</li>
                <li>Nivea</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default FooterMain;
