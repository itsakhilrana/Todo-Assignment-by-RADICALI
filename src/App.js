import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css'

import HeaderComponent from './components/headerComponent'
import HomeScreen from './screens/homeScreen'
import TaskScreen from './screens/taskScreen'

function App() {
  return (
    <Router>
      <div className="App">
        
        <HeaderComponent></HeaderComponent>
        <Switch>
          <Route exact path="/" component={HomeScreen}></Route>
          <Route  path="/mytasks" component={TaskScreen}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
