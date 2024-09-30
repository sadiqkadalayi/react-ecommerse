import React from 'react'
import './HeadSection2.css'
import { Link } from 'react-router-dom'
import Login from '../Login/Login'

function HeadSection2() { 
  return (
    <>
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6 col-lg-5 col-xl-5">
          <p className='head-cont-1'>Welcome to Panda.qa Qatar's One stop online HyperMarket !</p>
        </div>
        <div className="col-lg-7 col-xl-7">
          <div className="row">
            <div className="col-3 d-flex addr">
            <i className="fa fa-map-marker"></i>
            <p className='head-cont-para-p'>Khaleej Street. Near Jaidah Flyover. Mushaireb. DOHA</p>
            </div>
            <div className="col-3 head-cont-num">
            <i className="fa fa-phone"></i>
            <div className="head-cont-number">
                <span>
                    <a href="">4444 1099</a> & &nbsp;
                    <a href="">3158 7322</a>
                </span>
            </div>
            </div>
            <div className="col-6">
                <div className="row justify-content-center">
                <div className="col-3 d-flex login-cred">
                    <Link to={'Login'}><button className='btn btn-primary btn-sm'>Login</button></Link>
                </div>
                <div className="col-6 d-flex  Sign-cred">
                <Link to={'Sign'}><button className='btn btn-primary btn-sm'>Sign Up</button></Link>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default HeadSection2