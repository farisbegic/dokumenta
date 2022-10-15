import React, {createContext, useEffect, useState} from 'react';
import authentication from "../services/authentication";

export const AuthenticationContext = createContext("");

const AuthenticationContextProvider = (props) => {
    const [user, setUser] = useState("");
    const [accessToken, setAccessToken] = useState("");
    const [loading, setLoading] = useState(true);

    const setResponse = (response) => {
        console.log(response);
        localStorage.setItem("token", response.token)
        setAccessToken(response.token)
        setLoading(false)
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