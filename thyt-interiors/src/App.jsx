import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Stats from "./components/Stats";
import Services from "./components/Services";
import RecentWorks from './components/RecentWorks';
import Footer from './components/Footer';

function App() {
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <Stats />
      <Services />
      <RecentWorks />
      <Footer />
    </div>
  )
}

export default App
