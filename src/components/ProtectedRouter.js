import React from 'react';
import {useAuth} from "../context/aunthContext";
import {Navigate} from "react-router-dom";

export const ProtectedRouter = ({children}) => {
const {user,loading} = useAuth()

    if (loading) return <h1>loading...</h1>
    if (!user) return <Navigate to="/login"/>

    return <>{children}</>
};
