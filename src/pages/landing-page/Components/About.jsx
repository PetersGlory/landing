import React from 'react'
import btc from "../../../assets/bg-home2.png"

export const About = () => {
  return (
    <div>
         {/* ABOUT START */}
         <section className="container-fluid mt-5">
              <div className=" row justify-content-center">
                <h1 className="text-white text-center col-12" id="h1">
                  <b>About OpenAfrica</b>
                </h1>
                <center>
                  <p className="text-center col-lg-6" style={{color:'#c9c9c9', fontWeight:'700'}}>
                  We aim to be the most complete defi platform covering all aspect of defi and 
                  putting defi within the reach of millions</p>
                </center>
              </div>
              <div className="row mt-5 justify-content-center">
                <div className="col-lg-7 col-md-12">
                  <img src={btc} className="animate fadeIn" style={{width:"inherit",height:"inherit"}} alt="btc" />
                </div>
                <div className="col-lg-5 col-md-12">
                    <div>
                      <ul>
                        <li className="row mt-1">
                            <div className="col-1">
                              <i className="fa fa-users"></i>
                            </div>
                            <div className="col-11">
                              <h3 className="text-white text-start"><b>Decentralized Platform</b></h3>
                              <p className="col-11" style={{color:'#c9c9c9', fontWeight:'600', marginLeft:"-15px"}}>
                              A clearing pool that provides a fixed price, transparent, fast and cheap exchange, 
                              and provides insurance coverage against a possible fraud case.
                              </p>
                            </div>
                        </li>
                        <li className="row mt-4">
                            <div className="col-1">
                              <i className="fa fa-users"></i>
                            </div>
                            <div className="col-11">
                              <h3 className="text-white text-start"><b>24/7 support</b></h3>
                              <p className="col-11" style={{color:'#c9c9c9', fontWeight:'600', marginLeft:"-15px"}}>
                              Provides very low transaction fees and fast transaction convenience 
                              for project owners and liquidity providers.
                              </p>
                            </div>
                        </li>
                        <li className="row mt-4">
                            <div className="col-1">
                              <i className="fa fa-star"></i>
                            </div>
                            <div className="col-11">
                              <h3 className="text-white text-start"><b>Pentested</b></h3>
                              <p className="col-11" style={{color:'#c9c9c9', fontWeight:'600', marginLeft:"-15px"}}>
                              OpenAfrica which is designed to work in integration with all networks, 
                              aims to provide ease of operation to users and project owners.
                              </p>
                            </div>
                        </li>
                      </ul>
                    </div>
                </div>
              </div>
            </section>
            {/* ABOUT END  */}
    </div>
  )
}
