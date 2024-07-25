import "./add-polls.css";
import deletIcon from '../../assets/delete-icon.png'; 

const AddPolls = () => {
    return (
        <div>
            <form action="" className="add-polling">
                <input type="text" placeholder="Who won most ball do'rs ?" className="add-poll-input"/>
                <span className="optins">Options</span>
                <div className="option-container"><input type="text" placeholder="Ronaldo" className="option-input"/><img src={deletIcon} alt="" className="calenderLogo"/></div>
                <div className="option-container"><input type="text" placeholder="Messi" className="option-input" /><img src={deletIcon} alt="" className="calenderLogo"/></div>
                <div className="option-container"><input type="text" placeholder="M. Platini" className="option-input" /></div>
                <div className="option-selection-container">
                    <input type="radio" name="" id="" className="radio-option"/> Anonymous
                    <input type="radio" name="" id="" className="radio-option-2"/> Employee id.
                </div>
                <button className="submit-button">Submit</button>
            </form>
        </div>
    )
};

export default AddPolls;
