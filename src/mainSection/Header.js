import React, { useState } from 'react'

function Header() {
    const [name, setName] = useState('')
    const [domain, setDomain] = useState('')
    const [objective, setObjective] = useState('')
    const [detail, setDetail] = useState({name: "Amit Yadav", domain: "FRONTEND DEVELOPER", objective: `To work in stimulation environment
    where I can apply and enhance my
    knowledge and skills to serve the
    organization to the best of my efforts`})
    const [show, setShow] = useState(false)
    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleDomain = (e) => {
        setDomain(e.target.value)
    }

    const handleObjective = (e) => {
        setObjective(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let newDetail = {
            name,
            domain,
            objective
        }
        setDetail(newDetail)
        setDomain('')
        setName('')
        setObjective('')
    }

    const handleClick = () => {
        if (show) {
            setShow(false)
        }
        else {
            setShow(true)
        }
    }
    //console.log(detail.name)
    return (
        <div className="head">
            {show ? <form onSubmit={handleSubmit}>
                <label htmlFor="Name" >Enter your Name : </label>
                <input type="text" value={name} onChange={handleName} className='input' />
                <br />
                <label htmlFor="domain" >Domain : </label>
                <input type="text" value={domain} onChange={handleDomain} className='input' />
                <br />
                <label htmlFor="objective" >Write Your Objective : </label>
                <input type="text" value={objective} onChange={handleObjective} className='input' />
                <br />
                <button type='submit' className='save'>Save</button>
            </form> : null}
            <button onClick={handleClick} className='btn-show_hide' >{show ? 'Hide Form' : 'Enter Data'}</button>
            <div className='basic_data'>
                <h2>{detail.name}</h2>
                <h2>{detail.domain}</h2>
                <h3>{detail.objective}</h3>
            </div>
        </div>
    )
}

export default Header