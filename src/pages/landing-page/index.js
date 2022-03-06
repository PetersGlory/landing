import React, {useEffect} from 'react';
// import btc from "../../assets/bg-home2.png"
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import { Header } from './Components/Header';
import Hero from './Components/Hero';
import { Roadmap } from './Components/Roadmap';
import Token from './Components/Token';
import Usecase from './Components/Usecase';


const LandingPage = () => {
  useEffect(()=>{
    setTimeout(()=>{
      document.getElementById('spinner').style.display="none"
    }, 1000)
  },[])
  
    return(
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
          <Hero />

         <About />
          <Usecase />
          <Token />
          <Roadmap />
          <Contact />
          <Footer />           

         
        </div>
        </div>
        </div>
    )
}

export default LandingPage;