import moment from 'moment';
import React from 'react';

const EventItemHome = ( props: {date :Date,  title: string }) => {
    return (
        <div className="eventitem">
                <div className="eventdate">
                <h4 className="dateinmonth">{moment(props.date).format("DD")}</h4>
                <h4 className="dateinmonth dateday">{moment(props.date).format("MMM")}</h4>
                </div>
            <h3 className="eventti">{props.title}</h3>
        </div>
    );
}

export default EventItemHome;
