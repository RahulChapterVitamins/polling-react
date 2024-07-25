 
import "./user-polls.css";
import  menuButton  from '../../assets/menu-logo.webp';
import calenderLogo from '../../assets/Vector_date.png'; 




const UserPolls = ({testNumber, startDate, lastDate, startTime, endTime}) => {
    return (
        <div className="user-polls-container">
            <div className="calender-logo"><img src={calenderLogo} alt="calender" /></div>
            <div className="details-conatiner">
                <span className="test-number">{testNumber}</span>
                <div className="date-time-container">
                    <div className="inner-date-time-container">
                        <span className="date-container">{startDate}</span>
                        <span className="time-conaitner">{startTime}</span>
                    </div>
                    <div className="inner-date-time-container-2">
                        <span className="date-container">{startTime}</span>
                        <span className="time-conaitner">{endTime}</span>
                    </div>
                </div>
            </div>
            <div className="menu-logo"><img src={menuButton} alt="menu-logo" className="menu-log"/></div>
        </div>
    )
};



export default UserPolls;
