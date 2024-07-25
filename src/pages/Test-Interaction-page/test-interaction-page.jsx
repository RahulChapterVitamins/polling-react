import "./test-interaction-page.css";
import backArrow from '../../assets/ep_back.png';
import shareLogo from '../../assets/Vector-1.png';
import PollQuetion from '../../components/Polls/poll-quetion';
import clickLogo from '../../assets/Vector.png';
import smileLogo from '../../assets/fluent-mdl2_sentiment-analysis.png';
import puzzelLogo from '../../assets/mdi_puzzle.png';
import AddNewPollPage from "../Add New Poll/add-new-poll-page";
import { useState } from "react";
import AddPolls from "../../components/Add Polls/add-polls";



const TestInteractionPage = () => {
  const [currentPage, setCurrentPage] = useState('Poll-Page');

  const renderPage = () => {
    switch (currentPage) {
      case 'Poll-Page':
        return <AddNewPollPage />;

      case 'Add-Poll':
        return <AddPolls />;

      default:
        return <AddNewPollPage />;
    }
  }

  return (
    <div>
      <div className="test-navbar">
        <div className="test-number-title">
          <img src={backArrow} alt="arrow-logo" />
          <span className="test-number-text">Test 4</span>
        </div>
        <div className="test-date-container">
          <span className="test-date">Jul,22 - 20, 2024</span>
          <button className="share-button">
            <img src={shareLogo} alt="share-logo" className="shareLogo" />
            Share
          </button>
        </div>
      </div>
      <div className="test-main-conatainer">
        <div className="toggle-logo-container">
          <div className="interaction-toggle">
            <div className="interaction-logo-cotainer">
              <img src={clickLogo} alt="interaction" />
            </div>
            <span className="toggle-text">
              Interaction
            </span>
          </div>
          <div className="interaction-toggle">
            <div className="interaction-logo-cotainer">
              <img src={smileLogo} alt="interaction" />
            </div>
            <span className="toggle-text">
              Demo
            </span>
          </div>
          <div className="interaction-toggle">
            <div className="interaction-logo-cotainer">
              <img src={puzzelLogo} alt="interaction" />
            </div>
            <span className="toggle-text">
              Demo
            </span>
          </div>
        </div>
        <div className="polls-container">
          <span className="polls-title">My Interactions <button className="add-new-button" onClick={() => setCurrentPage('Add-Poll')}>+ Add New</button></span>
          <span className="poll-text">Polls</span>
          <PollQuetion />
        </div>
        <div className="add-new-interaction-container">
          {renderPage()}
        </div>
      </div>
    </div>
  )
};

export default TestInteractionPage;
