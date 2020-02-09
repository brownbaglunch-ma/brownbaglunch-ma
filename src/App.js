import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store'
import './App.css';
import Navbar from './components/navbar/Navbar.component';
import Baggers from './components/baggers/Baggers.component';
import Home from './components/home/Home.component';

import './assets/vendor/fontawesome-free/css/all.min.css'
import './assets/vendor/magnific-popup/magnific-popup.css'
import './assets/fonts/google.css'
import './assets/styles/creative.css'

function App() {
  
    return (
      <Provider store={store}>
      <React.Fragment>
        <Router>
          <Navbar />
          <Switch >
            <Route exact path="/" component={Home} />
            <Route exact path="/baggers" component={Baggers} />
          </Switch>
        </Router>
      </React.Fragment>
    </Provider>
    );
}

export default App;
