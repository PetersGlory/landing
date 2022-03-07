import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
          {/* HEADER START */}
          <header className="navbar navbar-custom header" style={{backgroundColor:"rgb(32,35,155)"}} id="header">
            <div className="navbar-expand">
              <div className="container">
                <div className="row m-0 align-items-center">
                  <div className="col-lg-3 col-6 left-sm p-0">
                    <div className="header-middle-left">
                      <div className="logo navbar-header float-none-sm">
                        <Link className="navbar-brand page-scroll" to="/">
                          <b>OPENAFRICA</b>
                        </Link> 
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-1 p-0 me-auto">
                    <div className="overlay" />
                    <div id="menu" className="navbar-collapse collapse justify-content-center">
                      <ul id="menu-main" className="nav navbar-nav ml-auto">
                        <li className="level">
                          <a className="page-scroll" href="#about">ABOUT</a>
                        </li>
                        <li className="level">
                          <a className="page-scroll" href="#token">TOKEN DETAILS</a>
                        </li>
                        <li className="level">
                          <a className="page-scroll" href="#roadmaps">ROADMAP</a>
                        </li>
                        <li className="level">
                          <a className="page-scroll" href="#contact">CONTACT</a>
                        </li>
                        <li className="level">
                          <Link className="page-scroll" to="/login">APP</Link>
                        </li>
                        
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* HEADER END */} 
    </div>
  )
}
