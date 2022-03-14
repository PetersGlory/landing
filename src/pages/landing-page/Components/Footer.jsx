import React from 'react'

export const Footer = () => {
  return (
    <div>
      <footer>
         {/* FOOTER START */}
         <div className="footer dark-bg">
            {/* News Letter Start */}
            <div className="newsletter-bg">
              <div className="container">
                <div className="newsletter">
                  <div className="newsletter-inner center-sm">
                    <div className="row justify-content-center align-items-center">
                      <div className=" col-xl-10 col-12">
                        <div className="row align-items-center">
                          <div className="col-xl-6 col-lg-6">
                            <div className="d-lg-flex align-items-center">
                              <div className="newsletter-title">
                                <h2 className="main_title mb-0">Newsletter Subscription</h2>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6">
                            <form>
                              <div className="newsletter-box">
                                <input type="email" placeholder="Email Here..." />
                                <button title="Subscribe" className="btn btn-color">Subscribe <svg xmlns="http://www.w3.org/2000/svg" viewBox="297 387.5 18 17" fill="#fff"><path d="M305 398.4a1.09 1.09 0 0 0 0 1.5 1.08 1.08 0 0 0 .7.3c.3 0 .5-.1.7-.3l3.2-3.2v-1.4s0-.1-.1-.1l-3.1-3.1a1.09 1.09 0 0 0-1.5 0 1.09 1.09 0 0 0 0 1.5l1.3 1.3H298c-.6 0-1 .5-1 1 0 .6.5 1 1 1h8.3l-1.3 1.5zm1.5-10.9c-2.8 0-5.5 1.4-7.1 3.8-.3.5-.2 1.1.3 1.4s1.1.2 1.4-.3c1.2-1.8 3.2-2.8 5.3-2.8 3.5 0 6.4 2.9 6.4 6.4s-2.9 6.4-6.4 6.4c-2.1 0-4.1-1.1-5.3-2.8-.3-.5-1-.6-1.4-.3-.5.3-.6 1-.3 1.4 1.6 2.3 4.2 3.7 7 3.7 4.7 0 8.5-3.8 8.5-8.5.1-4.6-3.7-8.4-8.4-8.4z" /></svg></button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* News Letter End */}
          
            <div className="container">
              <div className="footer-inner">
                <div className="footer-middle">
                  <div className="row">
                    <div className="col-lg-4 f-col">
                      <div className="footer-static-block"> <span className="opener plus" />
                        <div className="f-logo mb-30"> 
                          <a href="index.html" className> 
                            OPENAFRICA
                          </a> 
                        </div>
                        <div className="footer-block-contant">
                          <p>
                         OPENAFRICA  possesses a wide range of products that makes it a complete defi ecosystem. The complete suite of products makes it easy to onboard users into the crypto world .
                          </p>
                          <ul className="social-icon">
                            <li><a title="Facebook" className="facebook" href='/something'><i className="fa fa-facebook-f" /></a></li>
                            <li><a title="Twitter" className="twitter" href='/something'><i className="fa fa-twitter" /></a></li>
                            <li><a title="Linkedin" className="linkedin" href='/something'><i className="fa fa-linkedin" /></a></li>
                            <li><a title="RSS" className="rss" href='/something'><i className="fa fa-rss" /></a></li>
                            <li><a title="Pinterest" className="pinterest" href='/something'><i className="fa fa-pinterest-p" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="row">
                        <div className="col-lg-3 f-col">
                          <div className="footer-static-block"> <span className="opener plus" />
                            <h3 className="title">Quick Link<span /></h3>
                            <ul className="footer-block-contant link">
                              <li><a href="/soemthing">Home</a></li>
                              <li><a href="/soemthing">Services</a></li>
                              <li><a href="/soemthing">Tokens</a></li>
                              <li><a href="/soemthing">Team</a></li>
                              <li><a href="/soemthing">Contact</a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-3 f-col">
                          <div className="footer-static-block"> <span className="opener plus" />
                            <h3 className="title">Support<span /></h3>
                            <ul className="footer-block-contant link">
                              <li><a href="/soemthing">Documentation</a></li>
                              <li><a href="/soemthing">IOS Android Apps </a></li>
                              <li><a href="/soemthing">Privacy Policy</a></li>
                              <li><a href="/soemthing">Support Forum</a></li>
                              <li><a href="/soemthing">Terms&amp;Conditions</a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6 f-col">
                          <div className="footer-static-block"> <span className="opener plus" />
                            <h3 className="title">Contact Info<span /></h3>
                            <div className=" footer-block-contant ">
                              <ul className="address-footer">
                                <li className="item">
                                  <div className="address-icon icon1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M446.812 493.966l-67.499-142.781c-1.347-2.849-3.681-5.032-6.48-6.223l-33.58-14.949 58.58-98.231c11.568-22.579 17.434-46.978 17.434-72.515 0-42.959-16.846-83.233-47.435-113.402C337.248 15.703 296.73-.588 253.745.016c-41.748.579-81.056 17.348-110.685 47.22s-46.078 69.313-46.326 111.066c-.152 25.515 5.877 50.923 17.431 73.479.124.241.255.479.394.713l58.184 97.517-33.774 15.031c-2.763 1.229-4.993 3.408-6.285 6.142L65.187 493.966a12.63 12.63 0 0 0 2.388 14.23c3.693 3.777 9.345 4.859 14.172 2.711l84.558-37.646 84.558 37.646c3.271 1.455 7.006 1.455 10.277 0l84.558-37.646 84.558 37.646a12.62 12.62 0 0 0 5.135 1.093 12.63 12.63 0 0 0 9.037-3.803c3.691-3.778 4.643-9.454 2.384-14.231zm-310.339-274.06c-9.73-19.132-14.599-39.805-14.47-61.453.428-72.429 59.686-132.17 132.094-133.173 36.166-.486 70.263 13.199 95.993 38.576 25.738 25.383 39.911 59.267 39.911 95.412 0 21.359-4.869 41.757-14.473 60.638L266.85 402.054c-3.318 5.56-8.692 6.16-10.849 6.16s-7.532-.6-10.849-6.16L136.473 219.906zm214.361 227.985c-3.271-1.455-7.006-1.455-10.277 0l-84.558 37.646-84.558-37.646c-3.271-1.455-7.006-1.455-10.277 0l-58.578 26.08 50.938-107.749 32.258-14.356 37.668 63.133c6.904 11.572 19.072 18.481 32.547 18.481s25.643-6.909 32.547-18.48l37.668-63.133 32.261 14.361 50.935 107.744-58.574-26.081zm-94.83-346.284c-31.794 0-57.659 25.865-57.659 57.658s25.865 57.658 57.659 57.658 57.658-25.865 57.658-57.658-25.865-57.658-57.658-57.658zm0 90.05c-17.861.001-32.393-14.529-32.393-32.392s14.531-32.392 32.393-32.392 32.392 14.531 32.392 32.392-14.531 32.392-32.392 32.392z" /></svg>
                                  </div>
                                  <p className="address">150-A Appolo aprtment, opp. Hopewell Junction, Allen st Road, <br /> new york-405001.</p>
                                </li>
                                <li>
                                  <div className="address-icon icon2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="952 532 16 16"><path fill="#fff" d="M960 532c-4.4 0-8 3.9-8 8.7v4c0 .2.2.4.4.4h1.1v1.5a1.54 1.54 0 0 0 1.5 1.5h1.1c.2 0 .4-.2.4-.4v-6.5c0-.2-.2-.4-.4-.4H955a1.54 1.54 0 0 0-1.5 1.5v-1.5c0-4 2.9-7.3 6.5-7.3s6.5 3.3 6.5 7.3v1.5a1.54 1.54 0 0 0-1.5-1.5h-1c-.2 0-.4.2-.4.4v6.5c0 .2.2.4.4.4h1.1a1.54 1.54 0 0 0 1.5-1.5v-1.5h1.1c.2 0 .4-.2.4-.4v-4c-.1-4.8-3.7-8.7-8.1-8.7z" /><defs /></svg>
                                  </div>
                                  <p>+0 123-456-7890</p>
                                </li>
                                <li>
                                  <div className="address-icon icon3">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="952 534 16 12"><path fill="#fff" d="M966.7 534h-13.3c-.7 0-1.3.6-1.3 1.3v9.3c0 .7.6 1.3 1.3 1.3h13.3c.7 0 1.3-.6 1.3-1.3v-9.3c0-.7-.6-1.3-1.3-1.3zm-13.4.7h13.4l-6.3 5.8c-.1.1-.3.2-.5.2s-.4-.1-.5-.2l-6.3-5.8h.2zm-.6 10v-9.5l5.3 4.8-5.3 4.9v-.2zm14 .6h-13.5l5.3-4.9c.2.2.4.4.6.5.3.2.6.4.9.4s.7-.1.9-.4c.2-.1.4-.3.6-.5l5.3 4.9h-.1zm.6-.6v.2L962 540l5.3-4.8v9.5z" /><defs /></svg>
                                  </div>
                                  <p>info@example.com</p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>     
              </div>
            </div>
            <hr />
            <div className="footer-bottom ">
              <div className="copy-right-bg">
                <div className="container">
                  <div className="row align-center">
                    <div className="col-12">
                      <div className="copy-right ">© 2021 All Rights Reserved. Created By  <a href="/something">OpenAfrica</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-top">
            <div className="scrollup" />
          </div>
</footer>
    </div>
  )
}
