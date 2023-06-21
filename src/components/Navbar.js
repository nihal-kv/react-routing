import { NavLink } from 'react-router-dom';
import study from '../assets/studying.png'
import './Navbar.css';
import { toast } from 'react-hot-toast';
const Navbar=(props)=>{
    const isLoggedIn=props.isLoggedIn;
    const setIsLoggedIn=props.setIsLoggedIn;
    const logoutHandler=()=>{
        setIsLoggedIn(false);
        toast.success("Logged out");
    }
    return (
        <div className='navbar'>
            <NavLink to='/'>
                <img src={study} alt='study' className='navimg'></img>
            </NavLink>
            <nav>
                <ul className='links'>
                    <li>
                        <NavLink to='/' className='navlink'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/' className='navlink'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/' className='navlink'>Contact</NavLink>
                    </li>
                </ul>
            </nav>

            <div className='btncont'>
                { !isLoggedIn &&
                    <NavLink to='/login'>
                        <button className='btn'>Login</button>
                    </NavLink>
                }
                { !isLoggedIn &&
                    <NavLink to='/signup'>
                        <button className='btn'>Signup</button>
                    </NavLink>
                }
                { isLoggedIn &&
                    <NavLink to='/'>
                        <button className='btn' onClick={logoutHandler}>Logout</button>
                    </NavLink>
                }
                { isLoggedIn &&
                    <NavLink to='/dashboard'>
                        <button className='btn'>Dashboard</button>
                    </NavLink>
                }
            </div>

        </div>
    )
}
export default Navbar;