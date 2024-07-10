import React from 'react'
import '../ui/ItemStoriesComics.css';

export const StoryItem = ({thumbnail, title, creators,type }) => {
    
  return (
    <>  
        <div className="item-container">          
            <img className="item-image" src={thumbnail} alt=""/>
            <h4 className='item-name'>{title}</h4>
            <div className='item-autors'>
              {creators.map((c,i) => {
                  return <h6 
                      key={i}
                      className="item-autor"
                  ><b>-{c}</b></h6>
              })}
            </div>
            {(type) ? <h4 className='item-name'>Type: {type}</h4> : null}
        </div>
    </>
  )
}
