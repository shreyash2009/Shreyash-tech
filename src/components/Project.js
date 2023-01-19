import React, { useState,useEffect } from 'react'
import data from '../Utility/ProjectData'
import ScrollReveal from 'scrollreveal'
import '../Styles/Project.css'
const Project = () => {
  useEffect(()=>{

    const sr2 = ScrollReveal({
      origin: "top",
      duration: 2000,
      distance: "80px",
      reset: false
    })
   
  
    sr2.reveal(`.Project_container`,{opacity: 0, interval: 500})

  },[])
const [appState, setAppState]= useState({
    activeObject: 1,
    objects: data
})

const removeActiveClasses=(index)=>{
    setAppState({...appState,activeObject: appState.objects[index].id})
    
}

const toggleStyle=(index)=>{
    if(appState.objects[index].id===appState.activeObject){
        return "panel active";
    }else{
        return "panel";
    }
}

  return (
    <section className='Project_section'>
        
        <h2 className='section_heading'>My Projects</h2>

        <div className="Project_container">
     {
        data.map((item,index)=>{
            const { name, imgurl, link} = item;
            return(
                <div key={index}
        className={toggleStyle(index)}
        style={{backgroundImage: `url(${imgurl})`}}
        onClick={()=>{
            removeActiveClasses(index);
        }}
      >
        <a href={link} target="_blank" rel="noreferrer">{name}</a>
      </div>
            )
        })
     }
       
      </div>
                
                
    </section>
  )
}

export default Project