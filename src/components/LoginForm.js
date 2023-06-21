import { useState } from "react"
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LoginForm=(props)=>{
    const setIsLoggedIn=props.setIsLoggedIn;
    const navigate=useNavigate();
    const [formData, setFormData]= useState({email:"", password:""});
    const changeHandler=(event)=>{
        setFormData((prevState)=>({
            ...prevState, 
            [event.target.name]:event.target.value
        }))
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate('/dashboard');
        
    }
    return (
        
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="email">Email Address<sup>*</sup> </label><br/>
                <input  type='email' id="email" value={formData.email} name='email' onChange={changeHandler} required/> <br/>
                <label htmlFor="password">Password<sup>*</sup> </label><br/>
                <input  type='password' id="password" value={formData.password} name='password' onChange={changeHandler} required/> <br/>
                <button className="btn-template">Sign In</button>
            </form>
        </div>
    )
}

export default LoginForm;