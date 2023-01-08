import React, { useEffect } from 'react'
import { useState } from 'react'
import swal from 'sweetalert'
import axios from 'axios'
const Form = () => {
  const [occupation, setOccupation] = useState('')
  const [occupationVal, setOccupationVal] = useState('')
  const [state, setState] = useState('')
  const [stateVal, setStateVal] = useState('')

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
    setOccupationVal('')
    setStateVal('')
    console.log()
    swal('Form completed', 'Click OK to return!', 'success')

    const dataParams = {
      ...formValues,
      occupations: occupationVal
    }
    console.log('dataParams', formValues)
    // await axios.post(
    //   `https://frontend-take-home.fetchrewards.com/form`,
    //   dataParams
    // )
  }

  const getOccupation = async () => {
    const res = await axios.get(
      `https://frontend-take-home.fetchrewards.com/form`
    )
    setOccupation(res.data.occupations)
    setState(res.data.states)
  }

  useEffect(() => {
    getOccupation()
  }, [])

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label>name: </label>
          <input
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Full Name"
            value={formValues.name}
            required
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
            required
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
            required
            minLength={5}
          />
        </div>
        <div className="form-input">
          <label>occupation: </label>
          <select
            required
            value={occupationVal}
            onChange={(e) => setOccupationVal(e.target.value)}
          >
            <option value=""></option>
            {occupation &&
              occupation.map((res, index) => {
                return <option value={{ res }}>{res}</option>
              })}
          </select>
        </div>
        <div className="form-input">
          <label>state: </label>
          <select
            required
            value={stateVal}
            onChange={(e) => setStateVal(e.target.value)}
          >
            <option value=""></option>
            {state &&
              state.map((res, index) => {
                return <option value={res.name}>{res.name}</option>
              })}
          </select>
        </div>
        <div className="form button">
          <button type="submit">Submit form</button>
        </div>
      </form>
    </div>
  )
}

export default Form
