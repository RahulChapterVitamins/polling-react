import pollingImg from '../../assets/polling 1.png';
import interactionImg from '../../assets/13233938_5191101 1.png';
import "./add-new-poll-page.css";

const AddNewPollPage = () => {
  return (
    <div>
      <span className="add-new-title">Add New Interaction</span>
          <div className="inner-add-iteraction-container">
            <div className="inner-add-interaction-container-1">
              <img src={pollingImg} alt="polls" className="pollingImg"/>
              <span className="poll-text-2">Polls</span>
            </div>
            <div className="inner-add-interaction-container-1">
              <img src={interactionImg} alt="interactive quetions" className="interactionImg"/>
              <span className="poll-text-2">Interactive Quetions</span>
            </div>
          </div>
    </div>
  )
};

export default AddNewPollPage;
