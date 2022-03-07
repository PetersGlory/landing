import React from 'react'

const Token = () => {
  return (
    <div id="token">
        
              {/* TOKEN DETAILS STARTS */}
              <section className="container-fluid mt-5 pt-5 pb-5">
                <div className=" row justify-content-center mt-5">
                  <h1 className="text-white text-center col-12" id="h1">
                    <b>OpenAfrica Token Details</b>
                  </h1>
                </div>
                <div className="container">
                  <div className="row mt-5 justify-content-between">
                    <div className="col-lg-4 col-md-12 details mt-2 active p-2">
                      <h3 className="text-white"><b>Token Name</b></h3>
                      <span>OPENAFRICA</span>
                    </div>
                    <div className="col-lg-4 col-md-12 details mt-2 p-2">
                      <h3 className="text-white"><b>Token Blockchain</b></h3>
                      <span>BSC</span>
                    </div>
                    <div className="col-lg-4 col-md-12 details mt-2 p-2">
                      <h3 className="text-white"><b>Total Supply</b></h3>
                      <span>150,000,000</span>
                    </div>
                    <div className="col-lg-4 col-md-12 details mt-5 p-2">
                      <h3 className="text-white"><b>Token Tracker</b></h3>
                      <span>$FSWAP</span>
                    </div>
                    <div className="col-lg-4 col-md-12 details mt-5 p-2">
                      <h3 className="text-white"><b>IDO price</b></h3>
                      <span>0.0175$</span>
                    </div>
                    <div className="col-lg-4 col-md-12 details mt-5 p-2">
                      <h3 className="text-white"><b>Listing Price</b></h3>
                      <span>0.02$</span>
                    </div>
                    <div className="col-lg-4 col-md-12 details mt-5 p-2">
                      <h3 className="text-white"><b>Burned</b></h3>
                      <span>25,000,000</span>
                    </div>
                    <div className="col-lg-4 col-md-12 details mt-5 p-2">
                      <h3 className="text-white"><b>Token Type</b></h3>
                      <span>BSC20</span>
                    </div>
                    <div className="col-lg-4 col-md-12 details mt-5 p-2">
                      <h3 className="text-white"><b>Transaction Fee</b></h3>
                      <span>%5 Buy & %8 Sell Tax</span>
                    </div>
                  </div>
                </div>
              </section>
              {/* TOKEN DETAILS ENDS */}
    </div>
  )
}

export default Token