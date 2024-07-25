import "./polling-result.css";
import qrCode from "../../assets/qr-code.png";

const PollingResult = () => {
    return (
        <div>
            <div className="polling-result-div">
                <div className="polling-quetion">Who won the most ball dors ?</div>
                <span className="option">Options</span>
                <div className="inner-polling-quetion-percentage">
                    <div className="poll-result-percentage"><div className="show-result-conatiner"></div>Messi </div><span className="percentage">60%</span>
                </div>
                <div className="inner-polling-quetion-percentage">
                    <div className="poll-result-percentage">Ronaldo </div><span className="percentage">20%</span>
                </div>
                <div className="inner-polling-quetion-percentage">
                    <div className="poll-result-percentage">M. Platini </div><span className="percentage">20%</span>
                </div>
                <div className="polling-result-container">
                    <span className="polling-result-container-text">Share with Participants</span>
                    <div className="share-link-container">
                        <span className="inner-share-link-container">http://localhost:5173/</span>
                        <button className="copy-link-button">Copy Link</button>
                    </div>
                    <div className="generate-qr-cotainer">
                        <img src={qrCode} alt="" className="qrCode"/>
                        <div className="scan-text">
                            <span className="scan-the-qr">
                                Scan the QR
                            </span>
                            <span className="to-assess-p">
                                to access polls
                            </span>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
};

export default PollingResult;
