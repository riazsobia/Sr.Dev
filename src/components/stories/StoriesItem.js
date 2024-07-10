import React from 'react'
import './StoriesItem.css';

export const StoriesItem = ({ title, creators,comics }) => {
    
  return (
    <>  
        <div className="item-container">          
            <h4 className='item-name'>{title}</h4>
            <div className='item-autors'>
              {creators.map((c,i) => {
                  
                  return <h6 
                      key={i}
                      className="item-autor"
                  ><b>-{c}</b></h6>
              })}
            </div>
            <div className='item-comics'>
              <h4>Comic: </h4>
              {comics.map((c,i) => {
                  return <h6 
                      key={i}
                      className="item-autor"
                  ><b>{c}</b></h6>
              })}
            </div>
        </div>
    </>
  )
}
