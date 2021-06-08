import React from 'react';

const EventItem = ({date,month,  description }) => {
    return (
        <div className="eventitem">
                <div className="eventdate">
                <h4 className="dateinmonth">{date}</h4>
                <h4 className="dateinmonth dateday">{month}</h4>
                </div>
            <h3 className="eventdescription">{description}</h3>
        </div>
    );
}

export default EventItem;
