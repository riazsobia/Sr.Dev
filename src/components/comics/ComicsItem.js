import React from 'react'

export const ComicsItem = ({thumbnail, title, creators, text }) => {
    


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
                  >-{c}</h6>
              })}
            </div>
            {text.map((c,i) => {
                  return <div
                    key={i}>
                    <h4>Description: </h4>
                    <h6 
                      className="item-autor"
                    ><span className="item-description"></span>{c}</h6>
                  </div>    
              })}
        </div>
    </>
  )
}
