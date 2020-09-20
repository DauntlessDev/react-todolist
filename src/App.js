import React from 'react';
import Footer from './components/main/Footer';
import Header from './components/main/Header'

import Home from './pages/Home';
import About from './pages/About';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';



function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <div className="allButFooter">
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
            </Switch>
          </div>

          <Footer />
        </Router>
      </div>
    </Provider>
  );
}


export default App;
