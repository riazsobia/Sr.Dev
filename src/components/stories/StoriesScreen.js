import React from 'react'
import { useLocation } from "react-router-dom";
import queryString from 'query-string'

import { useFetchItems } from '../../hooks/useFetchItems';


import './StoriesScreen.css';
import { getItemsByName } from '../../helpers/getItemsByName';
import { SearchBar } from '../ui/SearchBar';
import { getStories } from '../../helpers/getStories';
import { StoriesItem } from './StoriesItem';

export const StoriesScreen = () => {

  // useLocation() retorna un objeto con la información de la url
  const location = useLocation()
  // queryString.parse() devuelve un objeto con la informacion de la query para realizar la busqueda
  const {q = ''} = queryString.parse(location.search);

  // params es un objeto con la informacion que se le pasa al hook
  const params = 'stories';
  // useFetchItems() retorna un objeto con la información de la petición
  const state = useFetchItems( params, getStories );
  const { loading, data } = state;
  // getItemsByName() retorna un arreglo con los items que coinciden con el nombre
  const comicsFilted = getItemsByName(q , data )

  return (
    <>
      {(loading) ? 
      <div>
        <h1>Loading...</h1> 
      </div> 
      :
        <div>
          <SearchBar/>
          {(q==='') 
          ? <div>
              <div  className="card-grid animate__animated animate__fadeIn">
                {
                  data.map(comic => (
                    <StoriesItem
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
                    <StoriesItem
                      key= {comic.id}
                      {...comic}
                    />
                  ))
                }
              </div>
            </div> 
          } 
        </div>
            }
    </>
    
  )
}
