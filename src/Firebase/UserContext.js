import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from './config'
import { useHistory } from 'react-router';
const UserContext = createContext(null);
export const GetUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const history = useHistory()
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setUser(user)
            setLoading(false)
        })
    }, [history, user])

    const value = { user }
    return (
        <UserContext.Provider value={value}>
            {!loading && children}
        </UserContext.Provider>
    )
}