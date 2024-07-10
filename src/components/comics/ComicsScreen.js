import React from 'react'
import { useLocation } from "react-router-dom";
import queryString from 'query-string'

import { useFetchItems } from '../../hooks/useFetchItems';


import './ComicsScreen.css';
import { getItemsByName } from '../../helpers/getItemsByName';
import { SearchBar } from '../ui/SearchBar';
import { getComics } from '../../helpers/getComics';
import { ComicsItem } from './ComicsItem';

export const ComicsScreen = () => {

  // useLocation() retorna un objeto con la información de la url
  const location = useLocation()
  // queryString.parse() devuelve un objeto con la informacion de la query para realizar la busqueda
  const {q = ''} = queryString.parse(location.search);

  // params es un objeto con la informacion que se le pasa al hook
  const params = 'comics';
  
  // useFetchItems() retorna un objeto con la información de la petición
  const state = useFetchItems( params, getComics );
  const { loading, data } = state;
  
  // getItemsByName() retorna un arreglo con los items que coinciden con el nombre
  const comicsFilted = getItemsByName(q , data )

  return (
    <>
      {(loading) ? <h1>Loading...</h1> :
        <div >
          <SearchBar/>
          {(q==='') 
          ? <div className="animate__animated animate__fadeIn">   
              <div className='card-grid'>
                {
                  data.map(comic => (
                    <ComicsItem
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
                    <ComicsItem
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
