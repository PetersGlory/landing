import React from 'react'
import roadmap from "../../../assets/roadmap.png"

export const Roadmap = () => {
  return (
    <div id="roadmaps">
        
              {/* ROADMAP SECTION STARTS */}
              <section style={{backgroundColor:"rgba(104, 104, 104, 0.918)rgb(32,35,155)"}} className="container-fluid mt-5 pt-5 pb-5">
                <div className=" row justify-content-center mt-5">
                  <h1 className="text-white text-center col-12" id="h1">
                    <b>Roadmap</b>
                  </h1>
                </div>
                <div className="container mt-5">
                  <div className="row mt-5 justify-content-between roadmap">
                    <div className="col-lg-5 mt-2">
                      <img src={roadmap} style={{width:"inherit"}} alt="roadmap" />
                    </div>
                    <div className="col-lg-7 mt-2 row">
                      <div className="col-lg-6 col-md-12 roadmap-right">
                        <h3 className="text-white"><b>STEP 1</b></h3>
                        <p className="col-11" style={{color:'#c9c9c9', fontWeight:'600', marginLeft:"-15px"}}>
                        Conceptualization
                        Team recruitment
                        Brainstorming
                        Planning
                        Project site creation
                        </p>
                      </div>
                      <div className="col-lg-6 col-md-12 roadmap-left">
                      <h3 className="text-white"><b>STEP 2</b></h3>
                      <p className="col-11" style={{color:'#c9c9c9', fontWeight:'600', marginLeft:"-15px"}}>
                      Contract deployment
                      Contract audit
                      Team kyc
                      Media platform
                      Charity platform
                      Ido
                      Listing on pancakeswap
                      </p>
                      </div>
                      <div className="col-lg-6 col-md-12 roadmap-right">
                      <h3 className="text-white"><b>STEP 3</b></h3>
                      <p className="col-11" style={{color:'#c9c9c9', fontWeight:'600', marginLeft:"-15px"}}>
                      IDO PLATFORM LAUNCH
                      NFT MARKETPLACE LAUNCH
                      FIRST IDO
                      DEX LAUNCH ( BSC )
                      MARKETING
                      INITIAL NFT SALE (INO )
                      </p>
                      </div>
                      <div className="col-lg-6 col-md-12 roadmap-left">
                      <h3 className="text-white"><b>STEP 4</b></h3>
                      <p className="col-11" style={{color:'#c9c9c9', fontWeight:'600', marginLeft:"-15px"}}>
                      CEX LISTING
                      Gamification launch
                      Wallet launch
                      Dapp partnership
                      Ambassador program
                      BURNING 🔥
                      </p>
                      </div>
                      <div className="col-lg-6 col-md-12 roadmap-right">
                        <h3 className="text-white"><b>STEP 5</b></h3>
                        <p className="col-11" style={{color:'#c9c9c9', fontWeight:'600', marginLeft:"-15px"}}>
                        Web3 social platform launch
                        Project partnership
                        Flutterswap Country tour with holders
                        METAVERSE project brainstorming
                        </p>
                      </div>
                      <div className="col-lg-6 col-md-12 roadmap-left">
                      <h3 className="text-white"><b>STEP 6</b></h3>
                      <p className="col-11" style={{color:'#c9c9c9', fontWeight:'600', marginLeft:"-15px"}}>
                      Website Wallet Connect,
                      Mobile Wallet App,
                      Exclusive Partnerships,
                      Branding
                      </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* ROADMAP SECTION ENDS */}
    </div>
  )
}
