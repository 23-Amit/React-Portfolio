import React, {useState} from 'react'
import Certification from './Certification'

function Certifications() {

  const [Certifications,setCertification] = useState(["Python", "JavaScript", "Reactjs", "Nodejs"])
  const [addCerticate,setAddcertificate] = useState(false)

  const addNewCertificate = (newCertificate)=>
  {
    setCertification(prevCertifications =>
      {
        return [newCertificate,...prevCertifications]
      })
  }

  const handleClick =()=>
  {
    if(addCerticate)
    {
      setAddcertificate(false)
    }
    else
    {
      setAddcertificate(true)
    }
  }

  const listOfCertification = Certifications.map((ele,index)=>
  {
     return (
      <ul key={index}>
        <h4>{ele}</h4>
        <button onClick={()=>{handleRemove(index)}} style={{background:"#FF9F9F",borderRadius: "10px",borderColor: "#E74646",marginLeft:"auto"}}>Delete</button>
      </ul>
     )
  })
  const handleRemove = (id)=>
  {
    const filteredCertification = Certifications.filter((ele,index)=>
    {
      return id!==index
    })

    setCertification(filteredCertification)

  }
  return (
    <div  style={{border:"2px solid black" ,padding:"20px",margin:"5px"}} className='component'>
        <h2 style={{textAlign:"center"}}>Certifications</h2>
        {addCerticate?<Certification addNewCertificate={addNewCertificate}/>:''}
        
        <button onClick={handleClick} className='btn-show_hide'>{addCerticate?'Hide form':'Add Certification'} </button>
        
        <div style={{display:"flex",alignContent:"center",justifyContent:"center",flexWrap:"wrap",overflow:"scroll"}}>{listOfCertification}</div>
    </div>
  )
}

export default Certifications