import { useNavigate } from 'react-router-dom';
import logo from '../../assets/chapter-logo 1.png';
import './landing-page.css';


const LandingPage = () => {
  const navigator = useNavigate();

  const handleClick = () => {
    navigator('/signup');
  }


  return (
    <div className="main-contianer">
      <div className='inner-contianer'>
        <img src={logo} alt="chapter-logo" className='logo' />
        <button className='button-continue' onClick={handleClick}>Continue</button>
      </div>
    </div>
  )
};

export default LandingPage;
