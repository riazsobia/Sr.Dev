import React, { useState } from 'react'
import './CharacterItem.css'

export const CharacterItem = ({thumbnail, title, comics }) => {
    
    const [show, setShow] = useState(false);

    // handleClick es una funcion encargada en mostrar informacion sobre los comics en los que participa el personaje
    const handleClick = () => {
        setShow(!show);
    }

  return (
    <>  
        <div className="item-container">          
            <img className="item-image" src={thumbnail} alt=""/>
            <h4 className='item-name'>{title}</h4>
            <button
                className="item-button"
                onClick={handleClick}
            >
                <h3>- Show comics </h3>
            </button>
            {show &&            
                <div>
                    {comics.map((c,i) => {
                    return <h6 
                        key={i}
                        className="item-autor"
                    ><b>{c}</b></h6>
                    })}
                </div>
            }           
        </div>
    </>
  )
}
