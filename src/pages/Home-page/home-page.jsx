import { Search } from '@mui/icons-material';
import logo from '../../assets/chapter-logo 1.png';
import userlogo from '../../assets/Frame 4.png';
import SideBarButton from '../../components/Sidebar Button/sidebar-buttons';
import "./homepage.css";
import UserPollsPage from '../User Polls Page/user-polls-page';
import { useState } from 'react';
import ArchivedPage from '../Archived Page/archived-page';


const HomePage = () => {
  const [currentPage, setCurrentPage] = useState('UserPollsPage');

  const renderPage = () => {
    switch (currentPage) {
      case 'UserPollsPage':
        return <UserPollsPage />

      case 'ArchivedPolls':
        return <ArchivedPage />

      default:
        return <UserPollsPage />
    }
  }

  return (
    <div className='home-page-container'>
      <div className="home-navbar">
        <img src={logo} alt="" className='logo-container' />
        <div className="search-container">
          <Search className="search-icon" />
          <input type="text" placeholder="Search" className='search-bar' />
        </div>
        <div className='user-profile-container'><img src={userlogo} alt="" />Mr XYZ</div>
      </div>
      <div className='home-main-container'>
        <div className="sidebar">
          <div onClick={() => setCurrentPage('UserPollsPage')}>
            <SideBarButton buttonText='My Polls' />
          </div>
          <div onClick={() => setCurrentPage('ArchivedPolls')}>
            <SideBarButton buttonText='Archive Polls' />
          </div>
          <SideBarButton buttonText='Expired Polls' />
          <SideBarButton buttonText='Team' />
          <SideBarButton buttonText='Log-out' />
        </div>
        <div className='page-container'>
          {renderPage()}
        </div>
      </div>
    </div>
  )
};

export default HomePage;
