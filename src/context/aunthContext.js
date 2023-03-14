import { createContext, useContext } from "react";


// constante que almacena el contexto
export const authContext = createContext();


// (hooks) funcion que permite pasar el componente global que ya esta envolviendo el router
export const useAuth = () =>{
   const context =  useContext(authContext);
   if(!context) throw new Error("No esta establecido el provider") //este error se lanzara cuando el contexto no este envoliendo los componentes
   return context
}


//componente que crea el contexto del proyecto donde el estado seria global
export function AuthProvider({children}){
    const user = 
    { login: true,}

const signup = (enail,password) => {

}
    return (
        <authContext.Provider value={{user}}>
        {children}
        </authContext.Provider>
    )

}   