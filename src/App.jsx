import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from './pages/Auth-page/auth-app';
import LandingPage from './pages/Landing-Page/landing-page';
import HomePage from './pages/Home-page/home-page';
// import UserPolls from './components/User Polls/user-polls';
// import UserPollsPage from './pages/User Polls Page/user-polls-page';
import TestInteractionPage from './pages/Test-Interaction-page/test-interaction-page';
// import AddNewInteractionPage from './pages/Add New Interaction Page/add-new-interaction-page';
// import ActiveTestPage from './pages/Active Test Page/active-test-page';
// import AddPolls from './components/Add Polls/add-polls';
// import DatePicking from './components/Date Picking/date-picking';
// import c from './pages/Polling Result/polling-result';
// import PollingResult from './pages/Polling Result/polling-result';



// Names of pages may be confusing you may change as you feel like
// Command to start the website is "npm run dev"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/signup' element={<AuthPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/test-interaction' element={<TestInteractionPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
