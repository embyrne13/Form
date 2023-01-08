import React from 'react'

export default function App() {
  const handleSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="App">
      <form handleSubmit={handleSubmit}>
        <div className="form-input">
          <label>name: </label>
          <input name="name" type="text" placeholder="Full Name" />
        </div>
        <div className="form-input">
          <label>email: </label>
          <input name="email" type="email" placeholder="email" />
        </div>
        <div className="form-input">
          <label>password: </label>
          <input type="password" name="password" placeholder="*****" />
        </div>
        <div className="form-input">
          <label>occupation: </label>
          <input name="occupation" placeholder="occupation" />
        </div>
        <div className="form-input">
          <label>state: </label>
          <input name="state" placeholder="state" />
        </div>
        <div className="form button">
          <button type="submit">Submit form</button>
        </div>
      </form>
    </div>
  )
}
