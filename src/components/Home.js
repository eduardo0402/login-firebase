import React from "react"
import { useAuth } from "../context/aunthContext";


export const Home = () => {
    // const authContext = useAuth();
    const {user} = useAuth()
    // const authContext = useContext(context);
    console.log(user);
    //console.log(user);
    // funcion de para pasar el valor de usecontext para que e valor del estado pase se quede en el cokmpoenente padre no importa que tenga hijos el valor sigue

    return <div> 
        <h1>Hola mundo</h1>
    </div>
}