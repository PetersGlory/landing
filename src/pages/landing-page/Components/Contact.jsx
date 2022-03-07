import React from 'react'

export const Contact = () => {
  return (
    <div id="contact">
        
              {/* CONTACT US AREA STARTS */}
              <section className="container-fluid mt-5 pt-5 pb-5">
                <div className=" row mt-5">
                  <h1 className="text-white text-start col-12" id="h1">
                    <b>Contact Us</b>
                  </h1>
                </div>
                <div className="container">
                  <div className="row mt-5 justify-content-between">
                      <div className="col-lg-4 col-sm-12 justify-content-center">
                          <div className="bg-secondary" style={{padding:"7%", borderRadius:"20px"}}>
                                <a href="mailto:support@OpenAfrica.com"
                                 className="btn btn-primary text-center text-white ml-4">
                                    support@OpenAfrica.com
                                </a>
                          </div>
                          <p className="text-white mt-4">
                              <h3><b>Follow us On</b></h3>
                              {/* <ul className="row">
                                  <li className="col-3">
                                      <i className="fa fa-facebook"></i>
                                  </li>
                                  <li className="col-3">
                                      <i className="fa fa-instagram"></i>
                                  </li>
                                  <li className="col-3">
                                      <i className="fa fa-twitter"></i>
                                  </li>
                              </ul> */}
                            <ul className="social-icon justify-content-between">
                                <li><a title="Facebook" className="facebook" href='/something'><i className="fa fa-facebook-f" /></a></li>
                                <li><a title="Twitter" className="twitter" href='/something'><i className="fa fa-twitter" /></a></li>
                                <li><a title="Linkedin" className="linkedin" href='/something'><i className="fa fa-linkedin" /></a></li>
                                <li><a title="RSS" className="rss" href='/something'><i className="fa fa-rss" /></a></li>
                                <li><a title="Pinterest" className="pinterest" href='/something'><i className="fa fa-pinterest-p" /></a></li>
                          </ul>
                          </p>
                      </div>
                      <div className="col-lg-8 col-sm-12">
                            <div className="bg-secondary pt-3 mb-5 forms" style={{padding:"2%", borderRadius:"20px"}}>
                                <h2 id="h2" className="text-start mb-5 text-white ml-4" style={{fontSize:"25px"}}>
                                    Leave Us a Message
                                </h2>
                                <div className="container mt-5">
                                    <div className="row">
                                        <div className="form-group col-6">
                                            <input type="text" placeholder={"First Name"} className="form-control" />
                                        </div>
                                        <div className="form-group col-6">
                                            <input type="text" placeholder={"Last Name"} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-6">
                                            <input type="email" placeholder={"Email"} className="form-control" />
                                        </div>
                                        <div className="form-group col-6">
                                            <input type="tel" placeholder={"Phone number"} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-12">
                                            {/* <input type="text" /> */}
                                            <textarea name="message" placeholder={"Message....."} className="form-control" id="message" cols="30" rows="5"></textarea>
                                        </div>
                                    </div>
                                    <button className="btn d-block mx-auto btn-primary bg-primary shadow p-4">SUBMIT YOUR MESSAGE</button>
                                </div>
                            </div>
                      </div>
                  </div>
                </div>
              </section>
              {/* CONTACT US AREA ENDS */}
    </div>
  )
}
