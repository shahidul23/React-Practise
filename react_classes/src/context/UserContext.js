import React,{useReducer, useState} from 'react'
import { InitialState, reducer } from '../reducer/usersReducer';

export const UsersContext = React.createContext({});

export const UserProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, InitialState);

    const value = {
        users: state.users,
        addUser:(newUser) =>{
            dispatch({type: 'ADD_USER', payload: newUser})
        },
        deleteUser:(id) =>{
            dispatch({type: 'DELETE_USER', payload: id})
        }
    }

    return (
        <UsersContext.Provider value={value} >
            {children}
        </UsersContext.Provider>
    )
}
