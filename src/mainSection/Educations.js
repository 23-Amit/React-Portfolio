import React,{useState} from 'react'
import Education from './Education'
function Educations() {
  const [Educations,setEducations] = useState([{course:`Bachelor of Electronic 
  And Communication`,insitute:"Jamia Hamdard",cgpa:"7.5"},{course:'Senior Secondary',insitute:"Kendriya Vidyalaya",cgpa:"6.67"},{course:'High School',insitute:"Kendriya Vidyalaya",cgpa:"7.15"}])
  const [show,setShow] = useState(false)

  const addNewEducation=(newEducation)=>
  {
    setEducations(prevEducation =>
      {
        return [...prevEducation,newEducation]
      })
  }
  const listOfEducation = Educations.map((ele,index)=>
  {
    return (
      <ul key={index}>
      <h3>{ele.course}</h3>
      <h4>{ele.insitute}</h4>
      <h4>{ele.cgpa}</h4>
      <button style={{background:"#FF9F9F",borderRadius: "10px",borderColor: "#E74646",marginLeft:"auto"}} onClick={()=>handleRemove(index)}>Delete</button>
      </ul>
    )
  })

  const handleRemove = (id)=>
  {
    const filteredEducation = Educations.filter((ele,index)=>
    {
      return id!==index
    })
    setEducations(filteredEducation)
  }

  const handleAddEducation = ()=>
  {
    if(show)
    {
      setShow(false)
    }
    else
    {
      setShow(true)
    }
  }

  return (
    <div  style={{border:"2px solid black" ,padding:"20px",margin:"5px"}} className='component'>
      <h2 style={{textAlign:"center"}}>Educations</h2>
        {show?<Education addNewEducation={addNewEducation}/>:''}
        <button onClick={handleAddEducation} className='btn-show_hide'>{show?'Hide form':'Add Education'}</button>
        
        <div style={{display:"flex",alignContent:"center",justifyContent:"center",flexWrap:"wrap"}}>{listOfEducation}</div>
    </div>
  )
}

export default Educations