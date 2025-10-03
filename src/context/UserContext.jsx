import { useState, createContext, useEffect } from 'react'

export const UserContext = createContext();

export function UserProvider({ children }) {

    const [isLoggedIn, setLoggedIn] = useState(() => {
        return localStorage.getItem("isLoggedIn") || false;
    });

    useEffect(() => {
        if (isLoggedIn) {
            localStorage.setItem("isLoggedIn", isLoggedIn);
        } else {
            localStorage.removeItem("isLoggedIn");
        }
    }, [isLoggedIn]);


    return (
        <UserContext.Provider value={{ isLoggedIn, setLoggedIn }}>
            {children}
        </UserContext.Provider>
    );

}