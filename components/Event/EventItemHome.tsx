import React from 'react';

const EventItemHome = ( props: {date :Number,month :string,  description: string }) => {
    return (
        <div className="eventitem">
                <div className="eventdate">
                <h4 className="dateinmonth">{props.date}</h4>
                <h4 className="dateinmonth dateday">{props.month}</h4>
                </div>
            <h3 className="eventti">{props.description}</h3>
        </div>
    );
}

export default EventItemHome;
