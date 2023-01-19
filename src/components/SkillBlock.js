import React from 'react'

const SkillBlock = ({data, category}) => {
    const newdata = data.filter((item)=>{
        return item.category === category;
    })
  return (
    <div className='container'>
        <h4>{category}</h4>
        <div className='skill_boxes' >
            {
                newdata.map((item)=>{
                    const {id, name} = item;
                    return(

                        <button key={id}>{name}</button>
                    )
                })
            }
        </div>

    </div>

  )
}

export default SkillBlock