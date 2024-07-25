import "./date-picking.css";

const DatePicking = () => {
    return (
        <div>

            <form action="" className="date-picking-container">
                <span className="date-picking-container-title">When would you like to use<br></br> this event ?</span>
                <div className="date-picker">
                    <div className="inner-date-pickr">
                        <label htmlFor="" className="start-date">Start Date</label>
                        <input type="date" className="date-picking-input" />
                    </div>
                    <div className="inner-date-pickr">
                        <label htmlFor="" className="start-date">Start Date</label>
                        <input type="date" className="date-picking-input" />
                    </div>
                </div>
                <div className="inner-date-pickr-2">
                    <label htmlFor="" className="start-date">Pick a Name</label>
                    <input type="text" name="" id="" className="date-picking-input-2" />
                </div>
                <div className="date-picking-buttons">
                    <button className="date-creating">Create</button>
                    <button className="date-picking">Cancel</button>
                </div>
            </form>
        </div>
    )
};

export default DatePicking;
