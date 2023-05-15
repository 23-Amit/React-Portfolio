import React,{useState} from 'react'
import Skill from './Skill'

function Skills() {
    const [skill,setSkills] = useState(["Python","JavaScript", "Reactjs", "Nodejs", "Mysql"])
    const [enterSkill,setEnterSkill] = useState(false)
    const addSkill = (newSkill)=>
    {
        setSkills(prevSkills =>
            {
                return [...prevSkills,newSkill]
            })
    }
    // console.log(skill)
    const handleClick = ()=>
    {
        if(enterSkill)
        {
            setEnterSkill(false)
        }
        else
        {
            setEnterSkill(true)
        }
    }
    const listOfSkill = skill.map((ele,index)=>
    {
        return (
            <ul key={index}>
                <h4>{ele}</h4>
                <button onClick={()=>removeSkill(index)} style={{background:"#FF9F9F",borderRadius: "10px",borderColor: "#E74646",marginLeft:"auto"}}>Delete</button>
            </ul>
        )
    })

    const removeSkill=(id)=>
    {
        const filteredList = skill.filter((ele,index)=>
        {
            //console.log('id',id," ",'ind',index)
            return id!==index
        })
        setSkills(filteredList)
    }
    
  return (
    <div>
        <h2>SKILLS</h2>
        {enterSkill?<Skill addSkill={addSkill}/>:''}
        <button onClick={handleClick} className='btn-show_hide'>{enterSkill?'Hide':'Add Skill'}</button>
        {listOfSkill}
    </div>
  )
}

export default Skills