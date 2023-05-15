import React,{useState} from 'react'

function Skill(props) {
    const [skill,setSkill] = useState('')
    const handleChange =(e)=>
    {
        setSkill(e.target.value)
    }
    const onSubmitHandle = (e)=>
    {
        e.preventDefault()
        let newSkill = skill
        props.addSkill(newSkill)
        setSkill('')
    }
  return (
    <form onSubmit={onSubmitHandle}>
        <label htmlFor="skill">Enter your Skill : </label>
        <input type="text" onChange={handleChange} value={skill} className='input'/>
        <br />
        <button type='submit' onClick={onSubmitHandle} className='save'>Save</button>
    </form>
  )
}

export default Skill