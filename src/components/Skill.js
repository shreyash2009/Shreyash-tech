import React, { useEffect } from 'react'
import data from '../Utility/skills'
import SkillBlock from './SkillBlock'
import '../Styles/Skills.css'
import ScrollReveal from 'scrollreveal'
const Skill = () => {
    
      useEffect(()=>{

        const sr2 = ScrollReveal({
          origin: "top",
          duration: 2000,
          distance: "80px",
          reset: true
        })
       
      
        sr2.reveal(`.container`,{opacity: 0, interval: 500})
    
      },[])
  return (
    <section className='Skills_section'>
    <h1 className='section_heading'>Tech Stack</h1>
    <div className='Skill_container'>
    <SkillBlock data={data} category="Frontend"/>
    <SkillBlock data={data} category="Backend"/>
    <SkillBlock data={data} category="Others"/>
    </div>
    </section>
  )
}

export default Skill