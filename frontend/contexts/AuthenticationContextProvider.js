import React, {createContext, useEffect, useState} from 'react';

export const AuthenticationContext = createContext("");

const AuthenticationContextProvider = (props) => {
    const [user, setUser] = useState("");
    const [accessToken, setAccessToken] = useState("");

    const setResponse = (response) => {
        console.log(response);
        localStorage.setItem("token", response.token)
        setAccessToken(response.token)
    }

    const logout = async () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        setUser("")
        setAccessToken("")
    }

    useEffect(() => {
        setUser(localStorage.getItem("user"))
        setAccessToken(localStorage.getItem("token"))
    }, [])


    return (
        <AuthenticationContext.Provider value={{setUser, user, setAccessToken, accessToken, logout, setResponse}}>
            { props.children }
        </AuthenticationContext.Provider>
    );
};

export default AuthenticationContextProvider;