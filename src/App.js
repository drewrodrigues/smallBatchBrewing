import React from 'react'
import GrainIndexContainer from "./components/grains/GrainIndexContainer"
import FormContainer from './components/FormContainer'
import GrainFormContainer from "./components/GrainFormContainer"
import { Provider } from "react-redux"
import Store from './store'
import './App.css'

function App() {
  return (
    <Provider store={ Store }>
      <div className="App" style={ containerStyle }>
        <FormContainer />
        <GrainFormContainer />
        <GrainIndexContainer />
      </div>
    </Provider>
  )
}

const containerStyle = {
  background: "white",
  borderRadius: "10px",
  margin: "50px auto 0",
  maxWidth: "500px",
  padding: "20px"
}

export default App;