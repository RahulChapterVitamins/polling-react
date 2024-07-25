import './auth-page.css';
import logo from '../../assets/chapter-logo 1.png';
import googelLogo from '../../assets/google.png';
import LanguageIcon from '@mui/icons-material/Language';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';


const AuthPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home');
    }

    return (
        <div className='outer-container'>


            <div className="navbar">
                <img src={logo} alt="" className='logo-container' />
                <div className="link-contianer">
                    <span className='link-text'><LanguageIcon />Language</span>
                    <span className='link-text'><PersonIcon />Log-In</span>
                    <span className='link-signup'>SignUp</span></div>
            </div>

            <div className="main-container">
                <div className="half-circle"></div>
                <div className="half-circle-2"></div>
                <div className="text-contianer">{`"Crate and analyze`}<br></br> survey pool easy <br></br>{`with out intutive tool"`}</div>
                <div className="sign-up-container">
                    <form action="" className='sign-up-form'>
                        <div className="heading-container">Create your survey now !!</div>
                        <input type="email" className="input-container" placeholder='Email' />
                        <input type="password" className="input-container" placeholder='Password' />
                        <input type="number" className="input-container" placeholder='Mobile.No' />
                        <span className='policy-text'><input type="checkbox" name="" id="" />   I agree to terms and services policies</span>
                        <button className='sign-up-button' onClick={handleClick}>SIGN UP FOR FREE</button>
                        <span className='or-text'>OR</span>
                        <button className='google-sign-up-button'><img src={googelLogo} alt="google-log" className='google-logo' />Google</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default AuthPage;
