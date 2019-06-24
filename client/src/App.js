// dependencies
import React from 'react'
import { Provider } from "react-redux"
import Store from './store'
import { BrowserRouter, Route, Switch } from "react-router-dom"

// components
import Navbar from "./components/shared/Navbar"
import Landing from "./components/pages/Landing"
import Login from "./components/pages/Login"
import Signup from "./components/pages/Signup"

// styles
import './App.css'

function App() {
  return (
    <Provider store={ Store }>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/signup" component={ Signup } />
          <Route path="/login" component={ Login } />
          <Route path="/" component={ Landing } />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App;