import React from 'react';
import CustomHeader from './Header/CustomHeader';

const PageHeader = (props : { pageTitle:string }) => {
    return (
        <div className="pageheader">
        <CustomHeader/>
        <div className="pagetitlewrapper">
          <h1 className="pagetitle">{props.pageTitle}</h1>
          <div className="home-gallary">HOME   .  {props.pageTitle}</div>
        </div>
      </div>
    );
}

export default PageHeader;
