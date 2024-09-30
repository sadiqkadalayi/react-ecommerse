import React from "react";
import "./HeadLogo.css";
import { Link } from "react-router-dom";

function HeadLogo() {
  return (
    <>
      <div className="container mt-1">
        <div className="row">
          <div className="col-md-2 log">
          <Link to={'/'}>
          <span className="justify-content-center align-middle"><strong>E-Commerse Application</strong></span>
          </Link>
          </div>
          <div className="col-md-7">
            <div className="input-group">
              <input type="text" className="form-control" />
              <span className="input-group-text"><i className="fa fa-search" aria-hidden="true"></i></span>
            </div>
          </div>
          <div className="col-md-3">
            <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-6 recent-list">
                  
                <i className="fa fa-list-alt" aria-hidden="true"></i>
                <span><a href="">Recently Viewed</a></span>
                </div>
                <div className="col-4 cart">
                <a href=""><i className="fa fa-cart-arrow-down" aria-hidden="true"></i> cart</a>
                </div>
                </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeadLogo;
