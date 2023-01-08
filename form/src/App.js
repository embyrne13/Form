import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">Please complete this form.</header>
      <form>
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

export default App
