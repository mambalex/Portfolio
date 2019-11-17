import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from 'containers/Home/Home';
import Navbar from 'components/Navbar/Navbar';
import Work from 'components/Home/Work/Work';
import ScrollToTop from 'components/UI/ScrollToTop/ScrollToTop';




const App = () => {
  return (
    <div className = "App" >
        <Navbar />
        <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/work" exact component={ Work } />
            <Route path="/skills"  component={ Home } />
        </Switch>
        <ScrollToTop />
    </div>
  );
};

export default App;