import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import './SignupForm.css';
const SignupForm=(props)=>{
    const setIsLoggedIn=props.setIsLoggedIn;
    const navigate=useNavigate();
    const [formData, setFormData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confpassword:""
    })


    const changeHandler=(event)=>{
        setFormData((prevData)=>({
            ...prevData,
            [event.target.name]:event.target.value
        }))
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        if(formData.password!==formData.confpassword)
        {
            toast.error('password not matched');
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account created successfully");
        navigate('/dashboard');
        
    }
    return (
        <div className="form">
            <form onSubmit={submitHandler}>
                <div className="name">
                    <div>
                        <label htmlFor="firstName">First Name<sup>*</sup></label><br/>
                        <input 
                           
                            type='text'
                            value={formData.firstName}
                            onChange={changeHandler}
                            id="firstName"
                            name="firstName"                       
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name<sup>*</sup></label><br/>
                        <input 
                            
                            type='text'
                            value={formData.lastName}
                            onChange={changeHandler}
                            id="lastName"
                            name="lastName"                       
                        />
                    </div>
                </div>
                <div >
                    <label htmlFor="email">Email Address<sup>*</sup></label><br/>
                    <input 
                        type='email'
                        value={formData.email}
                        onChange={changeHandler}
                        id="email"
                        name="email"                       
                    />
                </div>
                <div className="password half">
                    <div>
                        <label htmlFor="password">Enter Password<sup>*</sup></label><br/>
                        <input 
                           
                            type='password'
                            value={formData.password}
                            onChange={changeHandler}
                            id="password"
                            name="password"                       
                        />
                    </div>
                    <div>
                        <label htmlFor="confpassword">Confirm Password<sup>*</sup></label><br/>
                        <input 
                           
                            type='password'
                            value={formData.confpassword}
                            onChange={changeHandler}
                            id="confpassword"
                            name="confpassword"                       
                        />
                    </div>
                </div>
                <button className="btn-template">Create Account</button>
            </form>
        </div>
    )
}
export default SignupForm;