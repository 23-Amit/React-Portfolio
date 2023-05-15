import React, { useState } from 'react'

function Certification(props) {
const [Certificate, setCertificate] = useState('')
    const handleChange = (e)=>
    {
        setCertificate(e.target.value)
    }

    const handleSubmit = (e)=>
    {
        e.preventDefault()
        let newCertificate = Certificate
        props.addNewCertificate(newCertificate)
        setCertificate('')
    }
  return (
    <form>
        <label htmlFor="Certificate">Enter Your Certification : </label>
        <input type="text" onChange={handleChange} value={Certificate} className='input'/>
        <br />
        <button type='submit' onClick={handleSubmit} className='save'>Save</button>
    </form>
  )
}

export default Certification