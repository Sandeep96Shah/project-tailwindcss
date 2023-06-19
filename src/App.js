import React from 'react';
import Analytics from './Components/Analytics';
import Cards from './Components/Cards';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';

const App = () => {
  return(
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  )
}

export default App;