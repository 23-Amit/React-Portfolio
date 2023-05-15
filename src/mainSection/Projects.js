import React,{useState} from 'react'
import Project from './Project'

function Projects() {
    const [Projects,setProjects] = useState([{heading:"Expense Tracker",techStack:"Reactjs, JSX, CSS",url:"https://cosmic-hotteok-ceeb12.netlify.app/"},{heading:"Portfolio",techStack:"Reactjs, JSX, CSS",url:""},{heading:"Task Manager",techStack:"Reactjs, JSX, CSS",url:"https://serene-otter-e03856.netlify.app/"}])
    const [ShowProjects,setShowProjects] = useState(false)
    const addproject = (newProject)=>{
        setProjects(prevProjects =>
            {
                return [newProject,...prevProjects]
            })
    }
    console.log(Projects)
    const listofprojects = Projects.map((ele,index)=>
    {
        return (
        <ul >
        <><h3>Title : {ele.heading}</h3></>
        <><h4>Tech Stack : {ele.techStack}</h4></>
        <><h4>Live Project Link : <a href={ele.url}>{ele.heading}</a></h4></>
        <><button style={{background:"#FF9F9F",borderRadius: "10px",borderColor: "#E74646",marginLeft:"auto"}} onClick={()=>{handleRemove(index)}}>Delete Project</button></>
        </ul>)
    })
    //console.log(listofprojects)
    const handleRemove = (id)=>
    {
        const filteredProjects = Projects.filter((ele,index)=>
        {
            return id!==index
        })
        setProjects(filteredProjects)
    }
    const handleShow = ()=>
    {
        if(ShowProjects)
        {
            setShowProjects(false)
        }
        else
        (
            setShowProjects(true)
        )
    }
  return (
    <div>
        <h2>Projects</h2>
        {ShowProjects?<Project addproject = {addproject}/>:''}
        <button onClick={handleShow} className='btn-show_hide'>{ShowProjects?'Hide':'Add'} Projects </button>
        {listofprojects}
    </div>
  )
}

export default Projects