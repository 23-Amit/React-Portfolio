import React,{ useState} from 'react'
import Profile from './Profile'

function ProfileLinks() {
    const [profileLinks,setProfileLinks] = useState([{Platform:"GeekForGeeks",link:"https://auth.geeksforgeeks.org/user/amit_ydv_23/"},{Platform:"GitHub",link:"https://github.com/23-Amit"},{Platform:"Hakerrank",link:"https://www.hackerrank.com/amityadav23793?hr_r=1"}])
    const [enterProfile,setEnterProfile] = useState(false)

    const addProfile = (newProfile)=>
    {
        setProfileLinks((prevProfiles) =>
        {
            return [newProfile,...prevProfiles]
        })
    }

    const profileList = profileLinks.map((ele,index)=>
    {
        return(
            <ul>
                <h4><a href={ele.link}>{ele.Platform}</a></h4>
                <button style={{background:"#FF9F9F",borderRadius: "10px",borderColor: "#E74646",marginLeft:"auto"}} onClick={()=>handleDelete(index)}>Delete</button>
            </ul>
        )
    })

    const handleDelete = (id)=>
    {
        const filteredLinks = profileLinks.filter((ele,index)=>
        {
            return id!==index
        })

        setProfileLinks(filteredLinks)
    }

    const handleClick = ()=>
    {
        if(enterProfile)
        {
            setEnterProfile(false)
        }
        else
        {
            setEnterProfile(true)
        }
    }

  return (
    <div  style={{border:"2px solid black" ,padding:"20px",margin:"5px"}} className='component'>
        <h2 style={{textAlign:"center"}}>Profile Links</h2>
        {enterProfile?<Profile addProfile={addProfile}/>:''}
        <button onClick={handleClick} className='btn-show_hide'>{enterProfile?'Hide form':'Add Profile'}</button>
        <div style={{display:"flex",alignContent:"center",justifyContent:"center",flexWrap:"wrap"}}>{profileList}</div>
    </div>
  )
}

export default ProfileLinks