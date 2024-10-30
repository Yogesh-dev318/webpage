import { useEffect } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Navbar/hero/hero'
import AppStore from './components/appstore/Appstore'
import Footer from './components/footer/footer'
import Service from './components/service/Service'
import Testimonial from './components/testimonial/testimonial'
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar/>
      <Hero/>
      <Service/>
      <Banner/>
      <AppStore/>
      <Testimonial/>
      <Footer/>
      <Navbar/>
      <Hero/>
      <Service/>
      <Banner/>
      <AppStore/>
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default App
