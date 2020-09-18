import React from 'react';
import Footer from './components/main/Footer';
import Header from './components/main/Header'

import Home from './pages/Home';
import About from './pages/About';
function App() {
  return (
    <div className="App">
      <Header/>

        <div>
          {/* <Home/> */}
          <About/>
        </div>

      <Footer/>
    </div>
  );
}

export default App;
