import React,{useState} from 'react'

function Profile(props) {
    const [Platform,setPlatform] = useState('')
    const [link,setLink] = useState('')
    const handleChange = (e)=>
    {
        setPlatform(e.target.value)
    }

    const handleProfile = (e) =>
    {
        setLink(e.target.value)
    }

    const handleSubmit = (e)=>
    {
        e.preventDefault()
        const newProfile = {
            Platform,
            link
        }
        props.addProfile(newProfile)
        setPlatform('')
        setLink('')
    }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="Platform" >Enter Name of Your Coding Platform : </label>
        <input type="text" value={Platform} onChange={handleChange} className='input'/>
        <br />
        <label htmlFor="link" >Link of your profile : </label>
        <input type="text" value={link} onChange={handleProfile} className='input'/>
        <br />
        <button type='submit' className='save'>Save</button>
    </form>
  )
}

export default Profile