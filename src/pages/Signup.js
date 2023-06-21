import Template from "../components/Template";
import signup from '../assets/study.png'
const Signup=(props)=>{
    const setIsLoggedIn=props.setIsLoggedIn;
    return (
        <div>
            <Template
            heading='Join the millions learning to code with me for free'
            desc1='Build skills for today, tommorow and beyond'
            desc2='Education to future proof your career'
            formType='signup'
            image={signup}
            setIsLoggedIn={setIsLoggedIn}
            />
        </div>
    )
}

export default Signup;