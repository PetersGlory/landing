import React from 'react'

const Hero = () => {
  return (
    <div>
        {/* Bread Crumb STRAT */}
        <section className="banner-bg bread bread-banner ">
            <div className="background-shape">
              <svg className="shape_1" width={400} height={232} xmlns="http://www.w3.org/2000/svg" viewBox="1200 386 698 405" fill="#4e11be"><path d="M1242,624l188-204l468,371h-445L1242,624z" /><path d="M1339 386c76.8 0 139 62.2 139 139s-62.2 139-139 139-139-62.2-139-139 62.2-139 139-139z" /></svg>
              <svg className="shape_2" width={150} height={150} xmlns="http://www.w3.org/2000/svg" viewBox="223 105 100 100"><path fill="#4e11be" d="M273 105c27.6 0 50 22.4 50 50s-22.4 50-50 50-50-22.4-50-50 22.4-50 50-50z" /></svg>
              <svg className="shape_3" width={350} height={350} xmlns="http://www.w3.org/2000/svg" viewBox="844 111 601 604"><path fill="#4e11be" d="M1175.9,111L1445,456.9L1113.1,715L844,369.1L1175.9,111z" /></svg>
            </div>
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-lg-5 col-md-12 ">
                  <h2 className="text-white">
                    Secure and Decentralised Trading with OPENAFRICA
                  </h2>
                  <p style={{color:'#c9c9c9', fontWeight:'700'}} className="col-11">
                    OpenAfrica possesses a wide range of products that makes it a complete defi ecosystem. 
                    The complete suite of products makes it easy to onboard users into the crypto world.
                  </p>
                  <p style={{color:'#c9c9c9', fontWeight:'700'}} className="col-11">
                   We aim to be the most complete defi platform covering all aspect of defi and putting defi within the reach of millions.
                  </p>
                  <button className="mx-auto btn btn-primary bg-primary">OPENAFRICA WHITEPAPER</button>
                </div>
                <div className="col-lg-6 col-md-12  p-2">
                    <div className="container p-3 pt-5 pb-5 bg-secondarys">
                      <h4 className="text-center mt-3 mb-5 pb-5 pt-4">
                        <b>OPENAFRICA CONTRACT</b>
                      </h4>
                      <button className="mx-auto btn btn-primary btn-block shadow">BSCSCAN EXPLORER</button>
                    </div>
                </div>
              </div>
            </div>
        </section>
        {/* Bread Crumb END */} 
    </div>
  )
}

export default Hero