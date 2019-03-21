import React, { Component } from 'react';
import './App.css';
import ProjectList from './components/ProjectList';
import Navbar from './components/Navbar';
import ProjectDetail from './components/ProjectDetail';
import { Switch, Route } from 'react-router-dom';
import Graphics from './components/Graphics';
import Motion from './components/Motions'; 
import Video from './components/Videos';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbar />
        <Switch>
          <Route exact path="/projects" component={ProjectList}/>
          <Route exact path="/graphics" component={Graphics}/>
          <Route exact path="/motion" component={Motion}/>
          <Route exact path="/video" component={Video}/>
          <Route exact path="/projects/:id" component={ProjectDetail} />
        </Switch>
      </div>
    );
  }
}


export default App;
