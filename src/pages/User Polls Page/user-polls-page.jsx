import { useNavigate } from 'react-router-dom';
import dummyPollsData from '../../assets/test-user-poll-data.json';
import UserPolls from '../../components/User Polls/user-polls';
import "./user-polls-page.css";

const UserPollsPage = () => {
    const navigate = useNavigate();

    const goToTestInteractionPage = () => {
        navigate('/test-interaction');
    }

    return (
        <div className='user-polls-page-container'>
            <div className="heading-details">
                <span className="heading-details-text">Past Polls</span>
                <button className='heading-details-button'>+ Create An Event</button>
            </div>
            <div className="test-details-container">
                {dummyPollsData.UserPollsData.map((item, index) => {
                    return (
                        <div key={index} onClick={goToTestInteractionPage}>
                            <UserPolls key={index} testNumber={item['test-number']} startDate={item['start-date']} lastDate={item['last-date']} startTime={item['start-time']} endTime={item['end-time']} />
                        </div>
                    );
                })}
            </div>
        </div>
    )
};

export default UserPollsPage;
