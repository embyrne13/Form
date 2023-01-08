import './App.css'
import React from 'react'
import { useState } from 'react'
import swal from 'sweetalert'

function App() {
  const [occupation, setOccupation] = useState('')
  const [state, setState] = useState('')

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: ''
  })
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
    e.preventDefault()
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormValues({
      name: '',
      email: '',
      password: ''
    })
    setOccupation('')
    setState('')
    swal('Form completed', 'Click OK to return!', 'success')
  }
  return (
    <div className="App">
      <header className="App-header">Please complete this form.</header>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label>name: </label>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Full Name"
            value={formValues.name}
          />
        </div>
        <div className="form-input">
          <label>email: </label>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="email"
            value={formValues.email}
          />
        </div>
        <div className="form-input">
          <label>password: </label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="*****"
            value={formValues.password}
          />
        </div>
        <div className="form-input">
          <label>occupation: </label>
          <select
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          >
            <option value="Select">Select</option>
            <option value="teacher">teacher</option>
            <option value="doctor">doctor</option>
            <option value="SE">SE</option>
          </select>
        </div>
        <div className="form-input">
          <label>state: </label>
          <select value={state} onChange={(e) => setState(e.target.value)}>
            <option value="Select">Select</option>
            <option value="NY">New York</option>
            <option value="Colorado">Colorado</option>
            <option value="Vermont">Vermont</option>
          </select>
        </div>
        <div className="form button">
          <button type="submit">Submit form</button>
        </div>
      </form>
    </div>
  )
}

export default App
