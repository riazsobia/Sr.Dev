
import { types } from "../types/types"

const initialstate = {
    isAuthenticated: false
}

// creacion del reducer utilizado para definir si el usuario esta autenticado
// a traves de los types login y logout

export const authReducer = (state = initialstate, action) => {
    switch ( action.type ){
        case types.login:
            return {
               isAuthenticated: true
            }
        case types.logout:
            return{
                isAuthenticated:false
            }
            default:
                return state;
    }
}   