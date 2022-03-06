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
                  <div className="col-lg-7 col-1 p-0">
                    <div className="overlay" />
                    <div id="menu" className="navbar-collapse collapse justify-content-center">
                      <ul id="menu-main" className="nav navbar-nav">
                        <li className="level">
                          <a className="page-scroll" href="/">Home</a>
                        </li>
                        <li className="level">
                          <a className="page-scroll" href="/feature">Feature</a>
                        </li>
                        <li className="level">
                          <a className="page-scroll" href="/about">About</a>
                        </li>
                        <li className="level">
                          <a className="page-scroll" href="/blog">Blog</a>
                        </li>
                        <li className="level">
                          <a className="page-scroll" href="/contact">Contact</a>
                        </li>
                        <li className="level dropdown"> <span className="opener plus" /> 
                          <a className="page-scroll" href="pages.html">Page</a>
                          <div className="megamenu mobile-sub-menu">
                            <div className="megamenu-inner-top">
                              <ul className="sub-menu-level1">
                                <li className="level2 ">
                                  <ul className="sub-menu-level2">
                                    <li className="level3">
                                      <a href="/single-blog"><span />Single Blog</a>
                                    </li>
                                    <li className="level3">
                                      <a href="/token-sale"><span />Token Sale</a>
                                    </li>
                                    <li className="level3">
                                      <a href="/faq"><span />FAQ</a>
                                    </li>
                                    <li className="level3">
                                      <a href="/login"><span />Login</a>
                                    </li>
                                    <li className="level3">
                                      <a href="/register"><span />Register</a>
                                    </li>
                                    <li className="level3">
                                      <a href="/404-error"><span />404 Error</a>
                                    </li>
                                    <li className="level3">
                                      <a href="/coming-soon"><span />Coming Soon</a>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-2 col-5 p-0">
                    <div className="right-side header-right-link">
                      <ul>
                        <li>
                          <div className="signin d-none d-lg-block">
                            <Link to="/login" className="btn btn-color">Sign in</Link>
                          </div>
                        </li>
                        <li className="side-toggle">
                          <button data-target=".navbar-collapse" data-toggle="collapse" className="navbar-toggle" type="button"><i className="fas fa-bars" /></button>
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
