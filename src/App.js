import React from 'react'
import Form from './components/Form'
import { Provider } from "react-redux"
import Store from './store'
import './App.css'

function App() {
  return (
    <Provider store={ Store }>
      <div className="App">
        <Form />
      </div>
    </Provider>
  )
}

export default App;