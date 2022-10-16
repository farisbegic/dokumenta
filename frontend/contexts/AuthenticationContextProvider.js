import React, {createContext, useEffect, useState} from 'react';
import {useRouter} from "next/router";

export const AuthenticationContext = createContext("");

const AuthenticationContextProvider = (props) => {
    const router = useRouter();
    const [user, setUser] = useState("");
    const [accessToken, setAccessToken] = useState("");

    const setResponse = (response) => {
        localStorage.setItem("token", response.token)
        setAccessToken(response.token)
    }

    const logout = async () => {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        setUser("")
        setAccessToken("")
        router.push("/");
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