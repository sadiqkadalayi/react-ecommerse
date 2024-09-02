import React from "react";
import "./HeadLogo.css";

function HeadLogo() {
  return (
    <>
      <div className="container mt-1">
        <div className="row">
          <div className="col-2">
            <h4>
              <strong>E-Commerse</strong>
            </h4>
          </div>
          <div className="col-7">
            <div class="input-group">
              <input type="text" className="form-control" />
              <span className="input-group-text"><i class="fa fa-search" aria-hidden="true"></i></span>
            </div>
          </div>
          <div className="col-3">
            <div className="row">
                <div className="col-5 recent-list">
                <i class="fa fa-list-alt" aria-hidden="true"></i>
                <span><a href="">Recently Viewed</a></span>
                </div>
                <div className="col-4 cart">
                <a href=""><i class="fa fa-cart-arrow-down" aria-hidden="true"></i> cart</a>
                </div>
                </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeadLogo;
