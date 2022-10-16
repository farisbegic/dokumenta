import React, {useContext, useEffect} from 'react';
import {useRouter} from "next/router";
import {AuthenticationContext} from "../../contexts/AuthenticationContextProvider";

const PrivateRoute = ({children}) => {
    const { accessToken } = useContext(AuthenticationContext);
    const router = useRouter();

    useEffect(() => {
        if (accessToken) {
            router.replace('/');
        }
    }, [router, accessToken])

    return (
        <>{ !accessToken ? children : null}</>
    );
};

export default PrivateRoute;