import Template from "../components/Template";
import loginImg from '../assets/student.png';

const Login=(props)=>{
    const setIsLoggedIn=props.setIsLoggedIn;
    return (
        <div className="login">
            <Template
                heading='Welcome back'
                desc1='Build skills for today, tommorow and beyond'
                desc2='education to future proof your career'
                formType='login'
                image={loginImg}
                setIsLoggedIn={setIsLoggedIn}
            />
        </div>
    )
}

export default Login;