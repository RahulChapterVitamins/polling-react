
import { Search } from '@mui/icons-material';
import logo from '../../assets/chapter-logo 1.png';
import userlogo from '../../assets/Frame 4.png';
import "./navbar.css";

const Navbar = () => {
    return (
        <div className="home-navbar">
            <img src={logo} alt="" className='logo-container' />
            <div className="search-container">
                <Search className="search-icon" />
                <input type="text" placeholder="Search" className='search-bar' />
            </div>
            <div className='user-profile-container'><img src={userlogo} alt="" />Mr XYZ</div>
        </div>
    )
};

export default Navbar;
