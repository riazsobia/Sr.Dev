import { createStore,combineReducers, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk'

import { authReducer } from '../reducers/authReducer';


// combinacion de reducers escalable

const reducers = combineReducers({
    auth: authReducer
})

// creacion del compose

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// creacion del store con los reducers, el compose y el middleware

export const store = createStore(
    reducers,
  composeEnhancers(
      applyMiddleware(thunk)
      )  
);

//Creacion del store de redux para el login y logout haciendo uso de un middleware propio de redux (thunk) 
