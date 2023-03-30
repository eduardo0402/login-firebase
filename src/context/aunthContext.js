import {createContext, useContext, useEffect, useState} from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../firebase";

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

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const signup = (email,password) => createUserWithEmailAndPassword(auth, email, password) ;

    const login = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password);
            }
    const logout = () => signOut(auth);


    useEffect(()=>{
        onAuthStateChanged(auth, currentUser => {
           setUser(currentUser)
            setLoading(false)
        })
    },[]);
    return (
        <authContext.Provider value={{signup,login,user,logout,loading}}>
        {children}
        </authContext.Provider>
    )

}   