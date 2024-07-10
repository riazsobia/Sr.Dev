import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import {useDispatch} from 'react-redux'
import { logout } from '../../auth/auth'



export const Navbar = () => {

  // useDispatch() devuelve una funcion que permite ejecutar acciones
  const dispatch = useDispatch();

  
  const handleLogout = () => {
    // dispatch() ejecuta una accion para desloguearse
    dispatch(logout)
  }

  const [showMenu, setShowMenu] = useState(false)

  const handleMenu = () => {
    // setShowMenu() cambia el estado del menu que se muestra en dispositivos moviles
    setShowMenu(
        !showMenu
    )
  }

  return (
    <>
      <div className='navbar-container'>    
        <h1 className='navbar-brand'>
          <Link className='navbar-item' to="/">Marvel App</Link>
        </h1>
        <nav className='navbar'>
          <h3>
            <Link className='navbar-item' to="/Comics">Comics</Link>
            <Link className='navbar-item'  to="/Series">Series</Link>
            <Link className='navbar-item'  to="/Stories">Stories</Link>
            <Link className='navbar-item'  to="/Characters">Characters</Link>
          </h3>  
        </nav>
        <div>
            <ul>
              <span  className="navbar-username">
                Username
              </span>
              <button
                className="navbar-button"
                onClick={handleLogout} 
                >
                Logout
              </button>
            </ul>
          </div> 
      </div>
      <div>
        <button className="mobile-menu" 
          onClick={handleMenu}>
          {(showMenu)
            ?<h3 className="showmenu">- Hide menu</h3>
            :<h3 className="showmenu">+ Show menu</h3>
          }
        </button>
        {(showMenu) ?
          <div className="mobile-seccions animate__animated animate__fadeIn">
          <ul>
            <li><Link className='navbar-item' to="/Comics">Comics</Link></li> 
              <li><Link className='navbar-item'  to="/Series">Series</Link></li>
              <li><Link className='navbar-item'  to="/Stories">Stories</Link></li>
              <li><Link className='navbar-item'  to="/Characters">Characters</Link></li>
          </ul>  
        </div>
        : null}
        
      </div>
      
    </>
    
  )
}
