import "./quetion-page.css";
import chapterLogo from "../../assets/chapter-logo 1.png";

const QuetionPage = () => {
  return (
    <div>
      <div className="quetion-page-container">
        <span className="quetion-title">Who is Your favoirite Footballer ?</span>
        <span className="options">Options</span>
        <div className="answer-container">Messi</div>
        <div className="answer-container">Ronalod</div>
        <div className="answer-container">Neymar</div>
        <button className="submit-answer">Submit</button>
        <div className="by-who-container">You are voting as <span className="person">Annonymous</span></div>
        <img src={chapterLogo} alt="chapter-logo" className="chapter-logo-1"/>
      </div>
    </div>
  )
};

export default QuetionPage;
