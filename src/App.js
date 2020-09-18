import React from 'react';
import Footer from './components/main/Footer';
import Header from './components/main/Header'

import Home from './pages/Home';
import About from './pages/About';
function App() {
  return (
    <div className="App" >
      <div className="allButFooter">
        {/* <Home/> */}
        <Header />
        <About />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
