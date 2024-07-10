import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import queryString from 'query-string';
import './SearchBar.css'

export const SearchBar = () => {

    // useLocation() devuelve un objeto con la informacion de la url
    const location = useLocation();
    // useNavigate() devuelve una funcion que permite navegar entre rutas
    const navigate = useNavigate();
    // queryString.parse() devuelve un objeto con la informacion de la query para realizar la busqueda
    const {q = ''} = queryString.parse(location.search);

    // useForm() devuelve un objeto con la informacion del formulario
    const [Values, handleInputChange] = useForm({
        searchText: q,
      });

    

    const {searchText} = Values;

    // handleSubmit() se ejecuta al presionar el boton de buscar
    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`)
      }

  return (
    <>
        <form 
            className="search-container"
            onSubmit={handleSearch}>
            <input 
                className="search-input" 
                type="text"
                placeholder="Look for a comic"
                name="searchText"
                autoComplete="off"
                value={searchText}
                onChange={handleInputChange} />
            <button className="search-button" type="submit" >Search</button>
        </form>
    </>  
  )
}
