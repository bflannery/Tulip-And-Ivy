import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import App from './Components/Containers/App';
import LandingPage from './Components/Containers/LandingPage';
import About from './Components/Containers/About';
import Gallery from './Components/Containers/Gallery';
import Contact from './Components/Containers/Contact';


const router = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={LandingPage}/>
      <Route path='/about' component={About}/>
      <Route path='/gallery' component={Gallery}/>
      <Route path='/contact' component={Contact}/>
    </Route>
  </Router>
);

export default router;
