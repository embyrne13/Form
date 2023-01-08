import './App.css'
import React from 'react'
import Form from './components/Form'

function App() {
  return (
    <div className="App">
      <img
        className="image"
        src="https://mma.prnewswire.com/media/1309683/Fetch_Rewards_Logo.jpg?p=facebook"
      />
      <header>
        <p>Welcome</p> <p>Please complete this form</p>
      </header>
      <main>
        <Form />
      </main>
    </div>
  )
}

export default App
