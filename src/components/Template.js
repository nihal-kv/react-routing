import LoginForm from "./LoginForm";
import SignupForm from './SignupForm';
import './Template.css';
const Template=(props)=>{
    const heading=props.heading;
    const desc1=props.desc1;
    const desc2=props.desc2;
    const formType=props.formType;
    const image=props.image;
    const setIsLoggedIn= props.setIsLoggedIn;
    return (
        <div className="template">
            <div className="formContent">
                <div><h1>{heading}</h1></div>
                <div>
                    <p>
                       {desc1}
                        <br/>
                       {desc2}
                    </p> 
                    
                </div>
                {formType==='login' ? (<LoginForm setIsLoggedIn={setIsLoggedIn} />):(<SignupForm setIsLoggedIn={setIsLoggedIn} />) }
            </div>
            <div>
                <img src={image} alt='login/signup' className="formImg"/>
            </div>
        </div>
    )
}

export default Template;