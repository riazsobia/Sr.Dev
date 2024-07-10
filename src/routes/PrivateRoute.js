
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import { PublicRoute } from "./PublicRoute"


export const PrivateRoute = ({children}) => {

    const location = useLocation();
    const state = useSelector(state => state);
    localStorage.setItem('lastPath', location.pathname)


  return state.auth.isAuthenticated 
    ? children 
    : <PublicRoute/>
}
