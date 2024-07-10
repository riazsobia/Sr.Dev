import React from 'react'
import { useLocation } from "react-router-dom";
import queryString from 'query-string'

import { useFetchItems } from '../../hooks/useFetchItems';


import { getItemsByName } from '../../helpers/getItemsByName';
import { SearchBar } from '../ui/SearchBar';
import { getCharacters } from '../../helpers/getCharacters';
import { CharacterItem } from './CharacterItem';

export const CharactersScreen = () => {

  // useLocation() retorna un objeto con la información de la url
  const location = useLocation();

  // queryString.parse() devuelve un objeto con la informacion de la query para realizar la busqueda
  const {q = ''} = queryString.parse(location.search);

  // params es un objeto con la informacion que se le pasa al hook
  const params = 'characters';
  
  // useFetchItems() retorna un objeto con la información de la petición
  const state = useFetchItems( params, getCharacters );
  const { loading, data } = state;
  
  // getItemsByName() retorna un arreglo con los items que coinciden con el nombre
  const comicsFilted = getItemsByName(q , data )

  return (
    <>
      {(loading) ? <h1>Loading...</h1> :
        <div>
          <SearchBar/>
          {(q==='') 
          ? <div className="">   
              <div className="card-grid animate__animated animate__fadeIn">
                {
                  data.map(comic => (
                    <CharacterItem
                      key= {comic.id}
                      {...comic}
                    />
                  ))
                }
              </div>
            </div> 
          : <div>
              <div className='card-grid'>
                {
                  comicsFilted.map(comic => (
                    <CharacterItem
                      key= {comic.id}
                      {...comic}
                    />
                  ))
                }
              </div>
            </div> }
        </div>  
      }     
    </>
    
  )
}
