import React,{useState} from "react"

export const Register = () => {

    const [ user, setUser ] = useState({
        email: "",
        password: ""
    })

    //const [email, password] = user;

    const handleChange = ({target:{name, value}}) => {
        //console.log(name, value)
        setUser({...user,[name]: value} );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
    }

    return <div>
       <form onSubmit={handleSubmit}>
           <label htmlFor="email">Ingrese email</label>
           <input type="email" name="email" placeholder="email" onChange={handleChange} />

           <label htmlFor="password">Ingrese password</label>
           <input type="password" name="password" id="password" onChange={handleChange} />

           <button >Registrarse</button>
       </form>
    </div>
}