import React from 'react';
import ResultItem from './ResultItem';

const ResultCard = (props:{position:string}) => {
    return (
    <div className="resultcard">
        <h4 className="heading-3">{props.position}</h4>
        <ResultItem/>
        <ResultItem/>
        <ResultItem/>
        <ResultItem/>
    </div>
    );
}

export default ResultCard;
