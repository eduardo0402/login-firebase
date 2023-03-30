import React,{useState} from "react"
import {useAuth} from "../context/aunthContext";
import {useNavigate} from "react-router-dom";


export const Register = () => {

    const {signup} = useAuth();
    const [ user, setUser ] = useState({
        email: "",
        password: ""
    })

    const [error, setError] = useState("");
    const navigate = useNavigate()
    const handleChange = ({target:{name, value}}) => {
        //console.log(name, value)
        setUser({...user,[name]: value} );
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(user);
        setError("")
        try {
            await signup(user.email, user.password);
            navigate("/");
        } catch (error) {
          console.log(error.code)
            //if (error.code === "auth/internal-error"){setError("correo invalido")}
            setError(error.code)

        }

    }

    return <div>

        {error && <p>{error}</p>}
       <form onSubmit={handleSubmit}>
           <label htmlFor="email">Ingrese email</label>
           <input type="email" name="email" placeholder="email" onChange={handleChange} />

           <label htmlFor="password">Ingrese password</label>
           <input type="password" name="password" id="password" placeholder="*********" onChange={handleChange} />

           <button >Registrarse</button>
       </form>
    </div>
}