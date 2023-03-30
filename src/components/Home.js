import React from "react"
import { useAuth } from "../context/aunthContext";
import {useNavigate} from "react-router-dom";

export const Home = () => {

    const {user,logout,loading} = useAuth()

    const handleLogout = async () =>{
        await logout()
    }
if (loading)return <h1>loading</h1>

    return <div> 
        <h1>welcome {user.email}</h1>
        <button onClick={handleLogout}>logout</button>
    </div>
}