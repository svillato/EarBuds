import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from './actions';
// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Feature1 from './components/Feature1';
import Feature2 from './components/Feature2';
import Feature3 from './components/Feature3';
import Netflix from './components/Display/Item/Netflix';
import Podcast from './components/Podcast'

// import Landing from './components/Landing';
// import Forms from "./components/Forms";
// import Arrow from './components/Arrow';
// import TestingPage from './pages/testing'

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="App">

        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/netflix" component={Netflix} />
              <Route exact path="/podcast" component={Podcast} />
             </Switch>
            {/* <Feature1 />

            <Feature2 />

            <Feature3 /> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(null, actions)(App);
