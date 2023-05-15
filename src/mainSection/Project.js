import React from 'react'
import { useState } from 'react'

function Project(props) {
    const [heading,setHeading] = useState("")
    const [techStack,setTechStack] = useState("")
    const [url,setUrl] = useState("")

    const handleheading = (e)=>
    {
        setHeading(e.target.value)
    }

    const handleTechStack = (e)=>
    {
        setTechStack(e.target.value)
    }

    const handleUrl = (e)=>
    {
        setUrl(e.target.value)
    }

    const handleSubmit = (e)=>
    {
        e.preventDefault()
        let newproject = {
            heading,
            techStack,
            url
        }
        props.addproject(newproject)
        setHeading("")
        setTechStack("")
        setUrl("")
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor='Heading' >Heading For Projects : </label>
        <input type="text"  value={heading} onChange={handleheading} className='input'/>
        <br />
        <label htmlFor="Tech Stack">Tech Stack : </label>
        <input type="text" value={techStack} onChange={handleTechStack} className='input'/>
        <br />
        <label htmlFor="URL" >Enter your url : </label>
        <input type="text"  value={url} onChange={handleUrl} className='input'/>
        {/* <a href={url}>Live Project Link</a> */}
        <br />
        <button type='submit' className='save'>Save</button>
    </form>
  )
}

export default Project