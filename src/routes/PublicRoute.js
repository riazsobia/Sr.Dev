
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom"
import { LoginScreen } from "../components/login/LoginScreen"


export const PublicRoute = () => {

  const state = useSelector(state => state);

  return state.auth.isAuthenticated===false ? <LoginScreen/> : <Navigate to="/"/>

}
