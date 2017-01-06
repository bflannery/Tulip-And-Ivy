import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import App from './Components/Containers/App';
import LandingPage from './Components/Containers/LandingPage';
import AboutPage from './Components/Containers/AboutPage';
import GalleryPage from './Components/Containers/GalleryPage';
import ContactPage from './Components/Containers/ContactPage';


const router = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={LandingPage}/>
      <Route path='/about' component={AboutPage}/>
      <Route path='/gallery' component={GalleryPage}/>
      <Route path='/contact' component={ContactPage}/>
    </Route>
  </Router>
);

export default router;
