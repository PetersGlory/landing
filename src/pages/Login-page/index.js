import React, { useEffect } from 'react'
import { Footer } from '../landing-page/Components/Footer'
import { Header } from '../landing-page/Components/Header'

export const LoginPage = () => {
  useEffect(()=>{
    setTimeout(()=>{
      document.getElementById('spinner').style.display="none"
    }, 1000)
  },[])
  return (
    <div>
      <div>
        <div className="se-pre-con" id="spinner">
          <div className="spinner">
            <div className="triple-spinner" />
          </div>
        </div>
        {/* Loader End */}
        <div className="main">
        <Header />
          {/* CONTAIN START */}
          <section className="form-section mt-3 login-form ptb-100">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8 col-md-10">
                      <div className="form-bg box-wrap">
                        <form className="main-form full">
                          <div className="row">
                            <div className="col-12">
                              <div className="heading-part mb-30">
                                <h2 className="main_title heading mb-0">Login</h2>
                              </div>
                            </div>
                          </div>
                          <div className="input-box mb-30 mb-xs-20">
                            <div className="input-icon">
                              <span><i className="fas fa-envelope" /></span>
                            </div>
                            <input id="login-email" className="form-control" type="email" required placeholder="Email Address" />
                          </div>
                          <div className="input-box mb-30">
                            <div className="input-icon">
                              <span><i className="fas fa-lock" /></span>
                            </div>
                            <input id="login-pass" className="form-control" type="password" required placeholder="Enter your Password" />
                            <div className="input-icon icon-eye">
                              <a href='/'><i className="far fa-eye" /></a>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between align-items-center mb-30">
                            <div className="check-box"> 
                              <span>
                                <input id="remember_me" type="checkbox" name="remember_me" className="checkbox" />
                                <label htmlFor="remember_me">Remember Me</label>
                              </span>
                            </div>
                            <a title="Forgot Password" className="forgot-password" href="/forgot-password">Forgot password?</a>
                          </div>
                          <div className="login-btn align-center">
                            <button name="submit" type="submit" className="btn btn-color w-50">
                              <span>Log In <svg xmlns="http://www.w3.org/2000/svg" viewBox="297 387.5 18 17" fill="#fff"><path d="M305 398.4a1.09 1.09 0 0 0 0 1.5 1.08 1.08 0 0 0 .7.3c.3 0 .5-.1.7-.3l3.2-3.2v-1.4s0-.1-.1-.1l-3.1-3.1a1.09 1.09 0 0 0-1.5 0 1.09 1.09 0 0 0 0 1.5l1.3 1.3H298c-.6 0-1 .5-1 1 0 .6.5 1 1 1h8.3l-1.3 1.5zm1.5-10.9c-2.8 0-5.5 1.4-7.1 3.8-.3.5-.2 1.1.3 1.4s1.1.2 1.4-.3c1.2-1.8 3.2-2.8 5.3-2.8 3.5 0 6.4 2.9 6.4 6.4s-2.9 6.4-6.4 6.4c-2.1 0-4.1-1.1-5.3-2.8-.3-.5-1-.6-1.4-.3-.5.3-.6 1-.3 1.4 1.6 2.3 4.2 3.7 7 3.7 4.7 0 8.5-3.8 8.5-8.5.1-4.6-3.7-8.4-8.4-8.4z" /></svg>
                              </span>
                            </button>
                          </div>
                          <div className="different-login text-center mtb-30">
                            <span> or</span>
                          </div>
                          <div className="another-login text-center mb-30">
                            <ul>
                              <li>
                                <div className="social-btn mr-20 mr-sm-15">
                                  <a className="btn btn-facebook" href="/facebook">
                                    <i className="fab fa-facebook-f" /> facebook
                                  </a>
                                </div>
                              </li>
                              <li>
                                <div className="social-btn">
                                  <a className="btn btn-google" href="/google">
                                    <i className="fab fa-google-plus-g" /> Google
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="new-account align-center"> 
                            <span>Don't Have an Account?</span> 
                            <a className="link" title="Register with OpenAfrica" href="register.html">Create New Account</a> 
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* CONTAINER END */}

          <Footer />
        </div>
      </div>
    </div>
  )
}
