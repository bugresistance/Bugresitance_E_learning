import React, { useReducer, createContext } from 'react'
import App from '../App'
import {reducer} from '../reducer/reducer'

export const ProjectContext = createContext()

let initialState = {
    value: 0
}

const GlobalContext = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const Add = ()=>{
        return dispatch({
            type:"ADD"
        })
    }
    const Minus = ()=>{
        return dispatch({
            type:"Minus"
        })
    }
  return (
    <ProjectContext.Provider value={{...state, Add, Minus}}>
        <App />
    </ProjectContext.Provider>
  )
}

export default GlobalContext