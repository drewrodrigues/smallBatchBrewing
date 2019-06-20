import React from 'react'
import FormContainer from './components/FormContainer'
import { Provider } from "react-redux"
import Store from './store'
import './App.css'

function App() {
  return (
    <Provider store={ Store }>
      <div className="App">
        <FormContainer />
      </div>
    </Provider>
  )
}

export default App;