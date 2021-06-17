import React from 'react';

const ResultItem = () => {
    return (
        <div className="resultitem">
            <div style={{width:'50%'}} className="resultpercenteage"></div>
            <div className="resultperson"><img src="images/votePerson.png" loading="lazy" width="48" alt="" className="resultimage"/>
                <h4 className="resultname">Okonjo Iwuola (MAMA J)</h4>
                <h5 className="totalvotes">50 Votes</h5>
            </div>
        </div>
    );
}

export default ResultItem;
