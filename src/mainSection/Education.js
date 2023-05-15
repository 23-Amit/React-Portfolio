import React,{useState} from 'react'


function Education(props) {
    const [course,setCourse] = useState("")
    const [insitute,setInsitute] = useState('')
    const [cgpa,setCgpa] = useState(0)

    const courseHandle = (e)=>
    {
        setCourse(e.target.value)
    }

    const insituteHandle = (e)=>
    {
        setInsitute(e.target.value)
    }

    const cgpaHandle = (e)=>
    {
        setCgpa(e.target.value)
    }

    const submitHandle = (e)=>
    {
        e.preventDefault()
        const newEducation = {
            course,
            insitute,
            cgpa
        }
        props.addNewEducation(newEducation)
        setCourse("")
        setInsitute("")
        setCgpa("")
    }
  return (
    <form onSubmit={submitHandle}>
        <label htmlFor="Course" >Course : </label>
        <input type="text" value={course} onChange={courseHandle} className='input'/>
        <br />
        <label htmlFor="Insitute" >Name of your Insitute : </label>
        <input type="text" value={insitute} onChange={insituteHandle} className='input'/>
        <br />
        <label htmlFor="Marks" >CGPA : </label>
        <input type="text" value={cgpa} onChange={cgpaHandle} className='input'/>
        <br />
        <button type='submit' className='save' >Save</button>
    </form>
  )
}

export default Education